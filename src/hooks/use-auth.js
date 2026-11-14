// import { useCallback } from 'react';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
// import { AuthService } from '../api/auth.js';
// import { clearSession, isAuthed, setSession } from '../auth.js';
// import { useNotify } from './use-notify.js';

// const LOGIN_ERRORS = {
//   401: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
//   403: 'هذا الحساب معطل',
//   429: 'محاولات كثيرة، حاول لاحقاً',
// };
// const LOGIN_FALLBACK = 'تعذر تسجيل الدخول، حاول مرة أخرى';
// const CURRENT_USER_KEY = ['auth', 'me'];
// export const PASSWORD_CHANGE_PATH = '/first-login-password';
// const PASSWORD_ERRORS = {
//   current_password: 'كلمة المرور المؤقتة غير صحيحة',
//   password: 'يجب أن تختلف كلمة المرور الجديدة عن المؤقتة وألا تتجاوز 128 خانة',
// };

// export function useLogin() {
//   const navigate = useNavigate();
//   const { showError } = useNotify();

//   const mutation = useMutation({
//     mutationFn: ({ email, password }) => AuthService.login({ email, password }),
//     meta: { globalLoader: false },
//     onSuccess: (data, { remember }) => {
//       setSession(data.token, Boolean(remember));
//       const target = window.location.pathname === '/login' ? '/admin' : '/dashboard';
//       navigate(data.user?.must_change_password ? PASSWORD_CHANGE_PATH : target);
//     },
//     onError: (error) => showError(LOGIN_ERRORS[error.status] ?? LOGIN_FALLBACK),
//   });

//   return { login: mutation.mutate, isSubmitting: mutation.isPending };
// }

// export function useChangePassword() {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();
//   const { showSuccess, showError } = useNotify();

//   const mutation = useMutation({
//     mutationFn: AuthService.changePassword,
//     onSuccess: () => {
//       // بدون هذا التحديث يعيده حارس المسارات إلى شاشة تغيير كلمة المرور
//       queryClient.setQueryData(CURRENT_USER_KEY, (user) => user && { ...user, must_change_password: false });
//       showSuccess('تم تغيير كلمة المرور');
//       navigate('/dashboard', { replace: true });
//     },
//     onError: (error) => {
//       if (error.status === 401) return;
//       const field = Object.keys(error.errors ?? {})[0];
//       showError(PASSWORD_ERRORS[field] ?? error.message);
//     },
//   });

//   return { changePassword: mutation.mutate, isSaving: mutation.isPending };
// }

// export function useLogout() {
//   const mutation = useMutation({
//     mutationFn: AuthService.logout,
//     onSettled: () => {
//       clearSession();
//       window.location.assign('/login');
//     },
//   });

//   return { logout: () => mutation.mutate(), isLoggingOut: mutation.isPending };
// }

// export function useCurrentUser() {
//   const { data: user, isLoading } = useQuery({
//     queryKey: CURRENT_USER_KEY,
//     queryFn: AuthService.me,
//     enabled: isAuthed(),
//     refetchOnMount: false,
//   });

//   const hasPermission = useCallback(
//     (name) => Boolean(user?.roles?.some((role) => role.permissions?.some((permission) => permission.name === name))),
//     [user]
//   );

//   return { user, isLoading, hasPermission };
// }







// 


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

// ===== التوجيه حسب الدور =====
// اسم دور مدير النظام في الباك إند (RoleSeeder)
export const ADMIN_ROLE = 'admin';
export const ADMIN_HOME = '/admin';
export const USER_HOME = '/dashboard';

// هل اليوزر أدمن؟ الدور بيجي من رد /login و /me
export const isAdminUser = (user) => Boolean(user?.roles?.some((role) => role.name === ADMIN_ROLE));

// وين يروح بعد الدخول: الأدمن لصفحات الأدمن، والباقي للبوابة العادية
export const homePathFor = (user) => (isAdminUser(user) ? ADMIN_HOME : USER_HOME);

// صفحة الدخول المناسبة حسب المكان اللي كان فيه اليوزر
const ADMIN_PREFIXES = ['/admin', '/users', '/roles', '/vendors', '/master-data', '/settings', '/audit-log'];
const loginPathFor = (pathname = window.location.pathname) =>
  pathname === '/login' || ADMIN_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/'))
    ? '/login'
    : '/user-login';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showError } = useNotify();

  const mutation = useMutation({
    mutationFn: ({ email, password }) => AuthService.login({ email, password }),
    meta: { globalLoader: false },
    onSuccess: (data, { remember }) => {
      setSession(data.token, Boolean(remember));
      // نمسح بيانات أي يوزر سابق، ونخزّن اليوزر الجديد
      queryClient.removeQueries({ queryKey: CURRENT_USER_KEY });
      // الوجهة حسب دور اليوزر، مش حسب صفحة الدخول اللي استعملها
      navigate(data.user?.must_change_password ? PASSWORD_CHANGE_PATH : homePathFor(data.user), { replace: true });
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
      const user = queryClient.getQueryData(CURRENT_USER_KEY);
      // بدون هذا التحديث يعيده حارس المسارات إلى شاشة تغيير كلمة المرور
      queryClient.setQueryData(CURRENT_USER_KEY, (current) => current && { ...current, must_change_password: false });
      showSuccess('تم تغيير كلمة المرور');
      navigate(homePathFor(user), { replace: true });
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
      const loginPath = loginPathFor();
      clearSession();
      window.location.assign(loginPath);
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

  // الباك إند صار يرجّع قائمة جاهزة user.permissions، ولو مش موجودة نحسبها من الأدوار
  const hasPermission = useCallback(
    (name) =>
      Array.isArray(user?.permissions)
        ? user.permissions.includes(name)
        : Boolean(user?.roles?.some((role) => role.permissions?.some((permission) => permission.name === name))),
    [user]
  );

  return { user, isLoading, hasPermission, isAdmin: isAdminUser(user) };
}