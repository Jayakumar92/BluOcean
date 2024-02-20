import { AppProvider } from '@/contexts';
import { persistor, store } from '@/redux/store';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import {
  ReactQueryDevtools
} from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { AppRoutes } from '@/routes';
import {Toaster} from '@/components/ui/sonner'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <AppRoutes />
            <Toaster />
          </AppProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}
export default App
