import { useQuery } from '@tanstack/react-query';
import { AuditLogsService } from '../api/audit-logs.js';
import { OrganizationService } from '../api/organization.js';
import { RolesService } from '../api/roles.js';
import { useCurrentUser } from './use-auth.js';
import { toActivity } from './mappers.js';
import { useUserStats } from './use-users.js';

const RECENT_ACTIVITY_SIZE = 5;

export function useDashboardStats() {
  const { hasPermission } = useCurrentUser();
  const users = useUserStats();
  const canManageUsers = hasPermission('users.manage');
  const today = new Date().toLocaleDateString('en-CA');

  const { data: roles } = useQuery({ queryKey: ['roles', 'list'], queryFn: RolesService.getAll, enabled: canManageUsers });
  const { data: permissions } = useQuery({ queryKey: ['roles', 'permissions'], queryFn: RolesService.permissions, enabled: canManageUsers });
  const { data: todayLogs } = useQuery({
    queryKey: ['auditLogs', 'today', today],
    queryFn: () => AuditLogsService.getAll({ from: today }),
    enabled: hasPermission('audit.view'),
  });

  return { ...users, roles: roles?.length, permissions: permissions?.length, activityToday: todayLogs?.total };
}

export function useRecentActivity() {
  const { hasPermission } = useCurrentUser();
  const { data, isLoading } = useQuery({
    queryKey: ['auditLogs', 'recent'],
    queryFn: () => AuditLogsService.getAll(),
    enabled: hasPermission('audit.view'),
  });
  return { activity: (data?.data ?? []).slice(0, RECENT_ACTIVITY_SIZE).map(toActivity), isLoading };
}

export function useOrganization() {
  const { data } = useQuery({ queryKey: ['organization', 'details'], queryFn: OrganizationService.get });
  return data ?? null;
}
