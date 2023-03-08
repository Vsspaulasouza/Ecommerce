import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/open-sans';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import theme from './theme';
import Product from './pages/Product';
import { isProductArray } from './utils/ProductUtil';

function App() {
  async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Problem fetching data');
    }
    const products = await response.json();
    if (!isProductArray(products))
      throw new Error('Api do not return products');
    return products;
  }

  const queryResult = useQuery<Product[], Error>(
    ['products', { id: 1 }],
    getProducts
  );

  return (
    <Routes>
      <Route path="/" element={<Home queryResult={queryResult} />} />
      <Route
        path="/product/:productId"
        element={<Product queryResult={queryResult} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function WrappedApp() {
  const client = new QueryClient();

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

export { App, WrappedApp };
