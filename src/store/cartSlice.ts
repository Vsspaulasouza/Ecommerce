import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { productInArray } from '../utils/ProductUtil';

interface ProductsState {
  products: ProductCart[];
  amount: number;
}

const initialState: ProductsState = {
  products: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (
      state,
      action: PayloadAction<ProductCart>
    ): ProductsState => {
      const newState = _.cloneDeep(state);
      const index = productInArray(action.payload.product, state.products);

      if (index === -1) {
        newState.products.push(action.payload);
        newState.amount +=
          action.payload.product.price * action.payload.quantity;
        return newState;
      }

      newState.products[index].quantity += action.payload.quantity;
      newState.amount += action.payload.product.price * action.payload.quantity;
      return newState;
    },
    changeQuantityOfProduct: (
      state,
      action: PayloadAction<{ product: Product; newQuantity: number }>
    ): ProductsState => {
      const newState = _.cloneDeep(state);
      const index = productInArray(action.payload.product, state.products);

      if (index !== -1) {
        newState.amount -=
          action.payload.product.price * state.products[index].quantity;

        newState.products[index].quantity = action.payload.newQuantity;

        newState.amount +=
          action.payload.product.price * action.payload.newQuantity;
        return newState;
      }

      return newState;
    },
    removeProductInCart: (
      state,
      action: PayloadAction<Product>
    ): ProductsState => {
      const index = productInArray(action.payload, state.products);
      const newState = _.cloneDeep(state);

      if (index !== -1) {
        newState.amount -=
          state.products[index].product.price * state.products[index].quantity;
        newState.products.splice(index, 1);

        return newState;
      }
      return newState;
    },
  },
});

export const {
  addProductToCart,
  changeQuantityOfProduct,
  removeProductInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
