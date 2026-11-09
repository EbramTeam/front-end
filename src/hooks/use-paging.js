import { useEffect, useState } from 'react';

export function useDebouncedValue(value, delayMs = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}

// الصفحة تعود إلى 1 تلقائياً عند تغيّر الفلاتر
export function usePage(filterKey) {
  const [state, setState] = useState({ filterKey, page: 1 });
  const page = state.filterKey === filterKey ? state.page : 1;
  const setPage = (next) => setState({ filterKey, page: next });
  return [page, setPage];
}
