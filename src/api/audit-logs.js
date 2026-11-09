import { api } from '../lib/api-client.js';

export const AuditLogsService = {
  getAll: (params) => api.get('/audit-logs', { params }),
};
