import { useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../api/auth.js';
import { clearSession, isAuthed, setSession } from '../auth.js';
import { useNotify } from './use-notify.js';

const LOGIN_ERRORS = {
  401: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
  403: 'هذا الحساب معطل',
  429: 'محاولات كثيرة، حاول لاحقاً',
};
const LOGIN_FALLBACK = 'تعذر تسجيل الدخول، حاول مرة أخرى';
const CURRENT_USER_KEY = ['auth', 'me'];
export const PASSWORD_CHANGE_PATH = '/first-login-password';
const PASSWORD_ERRORS = {
  current_password: 'كلمة المرور المؤقتة غير صحيحة',
  password: 'يجب أن تختلف كلمة المرور الجديدة عن المؤقتة وألا تتجاوز 128 خانة',
};

export function useLogin() {
  const navigate = useNavigate();
  const { showError } = useNotify();

  const mutation = useMutation({
    mutationFn: ({ email, password }) => AuthService.login({ email, password }),
    meta: { globalLoader: false },
    onSuccess: (data, { remember }) => {
      setSession(data.token, Boolean(remember));
      navigate(data.user?.must_change_password ? PASSWORD_CHANGE_PATH : '/');
    },
    onError: (error) => showError(LOGIN_ERRORS[error.status] ?? LOGIN_FALLBACK),
  });

  return { login: mutation.mutate, isSubmitting: mutation.isPending };
}

export function useChangePassword() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showSuccess, showError } = useNotify();

  const mutation = useMutation({
    mutationFn: AuthService.changePassword,
    onSuccess: () => {
      // بدون هذا التحديث يعيده حارس المسارات إلى شاشة تغيير كلمة المرور
      queryClient.setQueryData(CURRENT_USER_KEY, (user) => user && { ...user, must_change_password: false });
      showSuccess('تم تغيير كلمة المرور');
      navigate('/', { replace: true });
    },
    onError: (error) => {
      if (error.status === 401) return;
      const field = Object.keys(error.errors ?? {})[0];
      showError(PASSWORD_ERRORS[field] ?? error.message);
    },
  });

  return { changePassword: mutation.mutate, isSaving: mutation.isPending };
}

export function useLogout() {
  const mutation = useMutation({
    mutationFn: AuthService.logout,
    onSettled: () => {
      clearSession();
      window.location.assign('/login');
    },
  });

  return { logout: () => mutation.mutate(), isLoggingOut: mutation.isPending };
}

export function useCurrentUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: CURRENT_USER_KEY,
    queryFn: AuthService.me,
    enabled: isAuthed(),
    refetchOnMount: false,
  });

  const hasPermission = useCallback(
    (name) => Boolean(user?.roles?.some((role) => role.permissions?.some((permission) => permission.name === name))),
    [user]
  );

  return { user, isLoading, hasPermission };
}
