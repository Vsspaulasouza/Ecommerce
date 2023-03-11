import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/open-sans';
import { Provider as ReduxProvider } from 'react-redux';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import theme from './theme';
import Product from './pages/Product';
import { isProductArray } from './utils/ProductUtil';
import Header from './components/Header/Header';
import store, { useAppDispatch } from './store/store';
import {
  LoadProductsError,
  loadProductsRequest,
  loadProductsSuccess,
} from './store/products/productsSlice';

function App() {
  const dispatch = useAppDispatch();

  async function getProducts() {
    dispatch(loadProductsRequest());
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      const err = new Error('Problem fetching data');
      dispatch(LoadProductsError(err));
      throw err;
    }

    const products = await response.json();
    if (!isProductArray(products))
      throw new Error('Api do not return products');

    dispatch(loadProductsSuccess(products));
    return products;
  }

  useQuery<Product[], Error>(['products', { id: 1 }], getProducts, {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <Box display="flex" flexDir="column">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

function WrappedApp() {
  const client = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export { App, WrappedApp };
