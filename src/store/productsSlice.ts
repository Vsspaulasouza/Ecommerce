import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: Error | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProductsRequest: (state) => {
      return { ...state, loading: true };
    },
    loadProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      return { ...state, loading: false, products: action.payload };
    },
    LoadProductsError: (state, action: PayloadAction<Error>) => {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

export const { loadProductsRequest, loadProductsSuccess, LoadProductsError } =
  productsSlice.actions;

export default productsSlice.reducer;
