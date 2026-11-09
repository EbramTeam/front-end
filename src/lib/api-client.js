import axios from 'axios';
import { clearSession, getToken } from '../auth.js';

const NETWORK_ERROR = 'تعذر الاتصال بالخادم، حاول مرة أخرى';
const LOGIN_URL = '/login';

let handleError = () => {};
export const setErrorHandler = (handler) => { handleError = handler; };

export class ApiError extends Error {
  constructor(message, { status, errors, data }) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
    this.data = data;
  }
}

export function extractMessage(error) {
  const body = error.response?.data;
  const firstFieldError = body?.errors && Object.values(body.errors).flat()[0];
  return firstFieldError || body?.message || NETWORK_ERROR;
}

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { Accept: 'application/json' },
});

http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.headers['Accept-Language'] = document.documentElement.lang || 'ar';
  return config;
});

http.interceptors.response.use(undefined, (error) => {
  const status = error.response?.status;
  const message = extractMessage(error);
  const apiError = new ApiError(message, { status, errors: error.response?.data?.errors, data: error.response?.data });

  // أول 401 يمسح التوكن، فلا تكرر الطلبات المتزامنة التحويل
  if (status === 401 && error.config?.url !== LOGIN_URL) {
    if (getToken()) {
      clearSession();
      window.location.assign('/login');
    }
    return Promise.reject(apiError);
  }

  if (!error.config?.silent) handleError(message);
  return Promise.reject(apiError);
});

const unwrap = (response) => response.data;

export const api = {
  get: (url, config) => http.get(url, config).then(unwrap),
  post: (url, body, config) => http.post(url, body, config).then(unwrap),
  put: (url, body, config) => http.put(url, body, config).then(unwrap),
  patch: (url, body, config) => http.patch(url, body, config).then(unwrap),
  delete: (url, config) => http.delete(url, config).then(unwrap),
};
