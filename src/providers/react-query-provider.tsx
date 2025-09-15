import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/react-query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
