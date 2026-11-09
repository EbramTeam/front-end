import { QueryClient, keepPreviousData } from '@tanstack/react-query';

// React Query هنا لتوحيد حالات التحميل والخطأ فقط، وليس للتخزين المؤقت
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        gcTime: 0,
        placeholderData: keepPreviousData,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: { retry: false },
    },
  });
}

export const queryClient = createQueryClient();
