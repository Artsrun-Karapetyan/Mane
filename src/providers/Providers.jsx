import { SWRConfig } from 'swr';

import { useApiRequests } from '@/services/useApiRequests.js';


export default function Providers({ children }) {
  const { GET } = useApiRequests();

  return (
    <SWRConfig
      value={{
        fetcher: GET,
        onError: async (error) => {
          console.error(error);
        },
        refreshInterval: 0,
        shouldRetryOnError: false,
        revalidateOnFocus: false,
        revalidateOnMount: true,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        revalidateIfStale: false,
        onLoadingSlow: () => {}
      }}>
      {children}
    </SWRConfig>
  );
}
