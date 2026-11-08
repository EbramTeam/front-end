import { api } from '../lib/api-client.js';

export const DepartmentsService = {
  getAll: () => api.get('/departments').then((response) => response.data),
  create: (body) => api.post('/departments', body),
  update: (id, body) => api.patch(`/departments/${id}`, body),
};
