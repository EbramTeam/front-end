import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DepartmentsService } from '../api/departments.js';
import { RolesService } from '../api/roles.js';
import { UsersService } from '../api/users.js';
import { useCurrentUser } from './use-auth.js';
import { toCreateUserBody, toPagedResult, toRoleOption, toUserParams, toUserRow } from './mappers.js';
import { useNotify } from './use-notify.js';
import { useDebouncedValue, usePage } from './use-paging.js';

const MANAGE_USERS = 'users.manage';

export function useUserFilters() {
  const [q, setQ] = useState('');
  const [role, setRole] = useState('');
  const [dept, setDept] = useState('');
  const [status, setStatus] = useState('');
  const reset = () => {
    setQ('');
    setRole('');
    setDept('');
    setStatus('');
  };
  return { q, setQ, role, setRole, dept, setDept, status, setStatus, reset };
}

export function useUsersList({ pageSize = 20 } = {}) {
  const filters = useUserFilters();
  const { hasPermission, isLoading: isUserLoading } = useCurrentUser();
  const q = useDebouncedValue(filters.q);
  const [page, setPage] = usePage(JSON.stringify([q, filters.role, filters.dept, filters.status]));
  const params = toUserParams({ q, role: filters.role, dept: filters.dept, status: filters.status }, page, pageSize);

  const { data, isLoading } = useQuery({
    queryKey: ['users', 'list', params],
    queryFn: () => UsersService.getAll(params),
    enabled: hasPermission(MANAGE_USERS),
  });

  return { filters, ...toPagedResult(data, toUserRow), page, setPage, pageSize, isLoading: isLoading || isUserLoading };
}

// المجاميع من حقل total، بطلبات حجمها صف واحد
function useUserCount(isActive, enabled) {
  const params = { per_page: 1, ...(isActive === undefined ? {} : { is_active: isActive }) };
  const { data } = useQuery({
    queryKey: ['users', 'count', params],
    queryFn: () => UsersService.getAll(params),
    enabled,
  });
  return data?.total;
}

export function useUserStats() {
  const enabled = useCurrentUser().hasPermission(MANAGE_USERS);
  return {
    total: useUserCount(undefined, enabled),
    active: useUserCount(1, enabled),
    inactive: useUserCount(0, enabled),
  };
}

export function useUser(id) {
  const { data, isLoading } = useQuery({
    queryKey: ['users', 'details', id],
    queryFn: () => UsersService.getById(id),
  });
  return { user: data ? toUserRow(data) : null, isLoading };
}

export function useUserFilterOptions() {
  const { hasPermission } = useCurrentUser();
  const enabled = hasPermission(MANAGE_USERS);
  const { data: roles = [] } = useQuery({ queryKey: ['roles', 'list'], queryFn: RolesService.getAll, enabled });
  const { data: departments = [] } = useQuery({ queryKey: ['departments', 'list'], queryFn: DepartmentsService.getAll, enabled });

  return {
    roleOpts: roles.map((role) => ({ value: String(role.id), label: role.label })),
    deptOpts: departments.map((department) => ({ value: String(department.id), label: department.name })),
    roleCards: roles.map(toRoleOption),
  };
}

export function useToggleUser() {
  const queryClient = useQueryClient();
  const { showSuccess } = useNotify();

  const toggle = useMutation({
    mutationFn: (user) => (user.isActive ? UsersService.deactivate(user.id) : UsersService.activate(user.id)),
    onSuccess: (_, user) => {
      showSuccess(user.isActive ? 'تم تعطيل المستخدم' : 'تم تفعيل المستخدم');
      void queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return { toggleUser: toggle.mutate, isToggling: toggle.isPending };
}

export function useResetUserPassword() {
  const reset = useMutation({ mutationFn: UsersService.resetPassword });
  return {
    resetPassword: reset.mutate,
    temporaryPassword: reset.data?.temporary_password ?? null,
    clearPassword: reset.reset,
  };
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  const { showSuccess } = useNotify();

  const create = useMutation({
    mutationFn: (form) => UsersService.create(toCreateUserBody(form)),
    onSuccess: () => {
      showSuccess('تم إنشاء المستخدم');
      void queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return { createUser: create.mutate, isSaving: create.isPending, created: create.data ?? null };
}
