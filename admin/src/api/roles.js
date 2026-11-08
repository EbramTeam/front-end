import { api } from '../lib/api-client.js';

export const RolesService = {
  getAll: () => api.get('/roles').then((response) => response.data),
  permissions: () => api.get('/permissions').then((response) => response.data),
  updatePermissions: (id, permissionIds) => api.put(`/roles/${id}/permissions`, { permission_ids: permissionIds }),
};
