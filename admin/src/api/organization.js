import { api } from '../lib/api-client.js';

export const OrganizationService = {
  get: () => api.get('/organization'),
};
