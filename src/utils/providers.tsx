'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
