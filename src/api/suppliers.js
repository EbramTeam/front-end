import { api } from '../lib/api-client.js';

// الحفظ silent: الشاشة تعرض قائمة الموردين المكررين بنفسها
export const SuppliersService = {
  getAll: (params) => api.get('/suppliers', { params }),
  getById: (id) => api.get(`/suppliers/${id}`),
  create: (body) => api.post('/suppliers', body, { silent: true }),
  update: (id, body) => api.patch(`/suppliers/${id}`, body, { silent: true }),
};
