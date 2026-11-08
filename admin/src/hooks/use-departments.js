import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DepartmentsService } from '../api/departments.js';
import { useCurrentUser } from './use-auth.js';
import { changedDepartmentFields, toDepartmentRow } from './mappers.js';
import { useNotify } from './use-notify.js';

export function useDepartments() {
  const { hasPermission, isLoading: isUserLoading } = useCurrentUser();
  const { data, isLoading } = useQuery({
    queryKey: ['departments', 'list'],
    queryFn: DepartmentsService.getAll,
    enabled: hasPermission('users.manage') || hasPermission('settings.manage'),
  });
  return { departments: (data ?? []).map(toDepartmentRow), isLoading: isLoading || isUserLoading };
}

// لا يوجد طلب لقسم واحد في الـ API، فنبحث عنه في القائمة
export function useDepartment(id) {
  const { departments, isLoading } = useDepartments();
  return { department: departments.find((department) => String(department.id) === id) ?? null, isLoading };
}

export function useSaveDepartment(current, onSaved) {
  const queryClient = useQueryClient();
  const { showSuccess } = useNotify();

  const save = useMutation({
    mutationFn: async (form) => {
      if (!current) return DepartmentsService.create({ name: form.name.trim(), code: form.code.trim() });
      const changes = changedDepartmentFields(current, form);
      return Object.keys(changes).length ? DepartmentsService.update(current.id, changes) : current;
    },
    onSuccess: (saved) => {
      showSuccess('تم حفظ بيانات القسم');
      void queryClient.invalidateQueries({ queryKey: ['departments'] });
      onSaved(saved.id);
    },
  });

  return { saveDepartment: save.mutate, isSaving: save.isPending };
}

export function useToggleDepartment() {
  const queryClient = useQueryClient();
  const { showSuccess } = useNotify();

  const toggle = useMutation({
    mutationFn: (department) => DepartmentsService.update(department.id, { is_active: department.status !== 'active' }),
    onSuccess: (_, department) => {
      showSuccess(department.status === 'active' ? 'تم تعطيل القسم' : 'تم تفعيل القسم');
      void queryClient.invalidateQueries({ queryKey: ['departments'] });
    },
  });

  return { toggleDepartment: toggle.mutate };
}
