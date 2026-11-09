import { useMemo, useSyncExternalStore } from 'react';

const DURATION_MS = { success: 4000, error: 6000 };

let toasts = [];
let nextId = 1;
const timers = new Map();
const listeners = new Set();

function publish(next) {
  toasts = next;
  listeners.forEach((listener) => listener());
}

export function dismissToast(id) {
  clearTimeout(timers.get(id));
  timers.delete(id);
  publish(toasts.filter((toast) => toast.id !== id));
}

function addToast(type, message) {
  if (toasts.some((toast) => toast.type === type && toast.message === message)) return;
  const id = nextId++;
  publish([...toasts, { id, type, message }]);
  timers.set(id, setTimeout(() => dismissToast(id), DURATION_MS[type]));
}

export function clearToasts() {
  timers.forEach(clearTimeout);
  timers.clear();
  publish([]);
}

// يستدعيه api-client من خارج React
export const notifyError = (message) => addToast('error', message);

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export const useToasts = () => useSyncExternalStore(subscribe, () => toasts);

export function useNotify() {
  return useMemo(() => ({
    showSuccess: (message) => addToast('success', message),
    showError: notifyError,
  }), []);
}
