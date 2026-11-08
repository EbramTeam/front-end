import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RolesService } from '../api/roles.js';
import { useCurrentUser } from './use-auth.js';
import { collectCheckedIds, toRoleView } from './mappers.js';
import { useNotify } from './use-notify.js';

export function useRoles() {
  const queryClient = useQueryClient();
  const { showSuccess } = useNotify();
  const enabled = useCurrentUser().hasPermission('users.manage');

  const rolesQuery = useQuery({ queryKey: ['roles', 'list'], queryFn: RolesService.getAll, enabled });
  const permissionsQuery = useQuery({ queryKey: ['roles', 'permissions'], queryFn: RolesService.permissions, enabled });

  const roles = useMemo(
    () => (rolesQuery.data ?? []).map((role) => toRoleView(role, permissionsQuery.data ?? [])),
    [rolesQuery.data, permissionsQuery.data]
  );

  const save = useMutation({
    mutationFn: ({ id, groups }) => RolesService.updatePermissions(id, collectCheckedIds(groups)),
    onSuccess: () => {
      showSuccess('تم حفظ الصلاحيات');
      void queryClient.invalidateQueries({ queryKey: ['roles'] });
    },
  });

  return {
    roles,
    permissionsCount: permissionsQuery.data?.length ?? 0,
    isLoading: rolesQuery.isLoading || permissionsQuery.isLoading,
    savePermissions: (id, groups) => save.mutate({ id, groups }),
    isSaving: save.isPending,
  };
}
