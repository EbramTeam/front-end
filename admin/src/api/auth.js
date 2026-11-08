import { api } from '../lib/api-client.js';

export const AuthService = {
  login(credentials) {
    return api.post('/login', credentials, { silent: true });
  },

  me() {
    return api.get('/me');
  },

  changePassword(body) {
    return api.post('/me/password', body, { silent: true });
  },

  logout() {
    return api.post('/logout', undefined, { silent: true });
  },
};
