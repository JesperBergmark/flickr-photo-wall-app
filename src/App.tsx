import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from '@/components/templates/MainLayout';
import { PhotoGrid } from '@/components/organisms/PhotoGrid';

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
      <MainLayout>
        <PhotoGrid />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
