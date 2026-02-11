import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayoutTemplate } from '@/components/templates/MainLayoutTemplate';
import { PhotoGridOrganism } from '@/components/organisms/PhotoGridOrganism';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayoutTemplate>
        <PhotoGridOrganism />
      </MainLayoutTemplate>
    </QueryClientProvider>
  );
}

export default App;
