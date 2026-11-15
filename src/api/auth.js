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

  // نسيت كلمة المرور: الباك إند بيبعت رابط بالإيميل (نفس الرد دايماً حتى لو الإيميل مش مسجّل)
  forgotPassword(email) {
    return api.post('/forgot-password', { email }, { silent: true });
  },

  // تعيين كلمة مرور جديدة من رابط الإيميل: { token, email, password, password_confirmation }
  resetPassword(body) {
    return api.post('/reset-password', body, { silent: true });
  },
};
