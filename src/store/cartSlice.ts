import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { productInArray } from '../utils/ProductUtil';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      if (productInArray(action.payload, state.products) === -1) {
        const { products } = state;
        products.push(action.payload);
        return { ...state, products };
      }
      return state;
    },
    removeProductInCart: (state, action: PayloadAction<Product>) => {
      const index = productInArray(action.payload, state.products);
      if (index !== -1) {
        const { products } = state;
        products.splice(index);
        return { ...state, products };
      }
      return state;
    },
  },
});

export const { addProductToCart, removeProductInCart } = cartSlice.actions;

export default cartSlice.reducer;
