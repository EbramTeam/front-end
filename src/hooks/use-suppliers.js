import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SuppliersService } from '../api/suppliers.js';
import { duplicateMessage, toPagedResult, toSupplierBody, toVendorRow } from './mappers.js';
import { useNotify } from './use-notify.js';
import { useDebouncedValue, usePage } from './use-paging.js';

const ACTIVE_PARAM = { 'نشط': 1, 'غير نشط / معلق': 0 };

export function useSuppliersList(filters) {
  const q = useDebouncedValue(filters.q);
  const [page, setPage] = usePage(JSON.stringify([q, filters.status]));
  const params = { page };
  if (q.trim()) params.search = q.trim();
  if (filters.status in ACTIVE_PARAM) params.active = ACTIVE_PARAM[filters.status];

  const { data, isLoading } = useQuery({
    queryKey: ['suppliers', 'list', params],
    queryFn: () => SuppliersService.getAll(params),
  });

  return { ...toPagedResult(data, toVendorRow), page, setPage, isLoading };
}

function useSupplierCount(params) {
  const { data } = useQuery({
    queryKey: ['suppliers', 'count', params],
    queryFn: () => SuppliersService.getAll(params),
  });
  return data?.total;
}

export function useSupplierStats() {
  return {
    total: useSupplierCount({}),
    active: useSupplierCount({ active: 1 }),
    inactive: useSupplierCount({ active: 0 }),
  };
}

export function useSupplier(id) {
  const { data, isLoading } = useQuery({
    queryKey: ['suppliers', 'details', id],
    queryFn: () => SuppliersService.getById(id),
  });
  return { vendor: data ? toVendorRow(data) : null, isLoading };
}

export function useSaveSupplier(id, onSaved) {
  const queryClient = useQueryClient();
  const { showSuccess, showError } = useNotify();

  const save = useMutation({
    mutationFn: async ({ form, active }) => {
      if (id) return SuppliersService.update(id, toSupplierBody(form, active));
      // الإنشاء لا يقبل الحالة: المورد يبدأ نشطاً ثم نعطّله إذا طُلب ذلك
      const created = await SuppliersService.create(toSupplierBody(form));
      return active === 'off' ? SuppliersService.update(created.id, { is_active: false }) : created;
    },
    onSuccess: (saved) => {
      showSuccess('تم حفظ بيانات المورد');
      void queryClient.invalidateQueries({ queryKey: ['suppliers'] });
      onSaved(saved.id);
    },
    onError: (error) => showError(duplicateMessage(error)),
  });

  return { saveSupplier: save.mutate, isSaving: save.isPending };
}

export function useToggleSupplier() {
  const queryClient = useQueryClient();
  const { showSuccess, showError } = useNotify();

  const toggle = useMutation({
    mutationFn: ({ id, active }) => SuppliersService.update(id, { is_active: active }),
    onSuccess: (_, { active }) => {
      showSuccess(active ? 'تم تفعيل المورد' : 'تم تعطيل المورد');
      void queryClient.invalidateQueries({ queryKey: ['suppliers'] });
    },
    onError: (error) => showError(duplicateMessage(error)),
  });

  return { toggleSupplier: toggle.mutate };
}
