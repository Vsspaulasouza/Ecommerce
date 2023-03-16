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
    addOneQuantityOfProduct: (
      state,
      action: PayloadAction<ProductCart>
    ): ProductsState => {
      const index = productInArray(action.payload.product, state.products);
      if (index !== -1) {
        const newState = _.cloneDeep(state);

        newState.products[index].quantity += 1;
        newState.amount += action.payload.product.price;

        return newState;
      }
      return state;
    },
    removeOneQuantityOfProduct: (
      state,
      action: PayloadAction<ProductCart>
    ): ProductsState => {
      const index = productInArray(action.payload.product, state.products);
      if (index !== -1) {
        const newState = _.cloneDeep(state);

        newState.products[index].quantity -= 1;
        newState.amount -= action.payload.product.price;

        return newState;
      }
      return state;
    },
    removeProductInCart: (
      state,
      action: PayloadAction<ProductCart>
    ): ProductsState => {
      const index = productInArray(action.payload.product, state.products);
      if (index !== -1) {
        const newState = _.cloneDeep(state);

        newState.amount -=
          state.products[index].product.price * state.products[index].quantity;
        newState.products.splice(index);

        return newState;
      }
      return state;
    },
  },
});

export const {
  addProductToCart,
  addOneQuantityOfProduct,
  removeOneQuantityOfProduct,
  removeProductInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
