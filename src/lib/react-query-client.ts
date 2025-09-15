import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)

      // Network behavior
      retry: (failureCount, error) => {
        if (typeof error === "object" && error !== null && "status" in error) {
          if ((error as any).status >= 400 && (error as any).status < 500) {
            return false;
          }
        }

        return failureCount < 3;
      },

      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

      // Refetch behavior
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchInterval: false, // Don't auto-refetch by default

      // Error handling
      throwOnError: false,

      networkMode: "online",
    },

    mutations: {
      retry: (failureCount, error) => {
        if (typeof error === "object" && error !== null && "status" in error) {
          if ((error as any).status >= 400 && (error as any).status < 500) {
            return false;
          }
        }

        return failureCount < 1; // Retry once for mutations
      },
      networkMode: "online",
      throwOnError: false,
    },
  },
});
