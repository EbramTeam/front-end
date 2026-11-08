import { useEffect, useState } from 'react';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { FullScreenLoader } from './Spinner.jsx';

const SHOW_AFTER_MS = 200;

// كل عمليات الكتابة تحجب الشاشة، والقراءة فقط عند طلبها عبر meta.globalLoader
export default function GlobalLoader() {
  const fetching = useIsFetching({ predicate: (query) => query.meta?.globalLoader === true });
  const mutating = useIsMutating({ predicate: (mutation) => mutation.meta?.globalLoader !== false });
  const active = fetching + mutating > 0;
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    if (!active) return undefined;
    const timer = setTimeout(() => setDelayPassed(true), SHOW_AFTER_MS);
    return () => {
      clearTimeout(timer);
      setDelayPassed(false);
    };
  }, [active]);

  return active && delayPassed ? <FullScreenLoader /> : null;
}
