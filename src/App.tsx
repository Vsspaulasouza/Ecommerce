import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/open-sans';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import theme from './theme';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const client = new QueryClient();

export function WrappedApp() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
