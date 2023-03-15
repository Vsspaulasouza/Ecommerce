import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
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
    addProductToCart: (state, action: PayloadAction<ProductCart>) => {
      if (productInArray(action.payload.product, state.products) === -1) {
        const { products } = state;
        products.push(action.payload);

        let { amount } = state;
        amount += action.payload.product.price * action.payload.quantity;

        return { ...state, products, amount };
      }
      return state;
    },
    increaseQuantityOfProduct: (
      state,
      action: PayloadAction<{ productCart: ProductCart; plusQuantity: number }>
    ) => {
      const index = productInArray(
        action.payload.productCart.product,
        state.products
      );
      if (index !== -1) {
        const { products } = state;
        products[index].quantity += action.payload.plusQuantity;

        let { amount } = state;
        amount +=
          action.payload.productCart.product.price *
          action.payload.plusQuantity;

        return { ...state, products, amount };
      }
      return state;
    },
    addOneQuantityOfProduct: (state, action: PayloadAction<ProductCart>) => {
      const index = productInArray(action.payload.product, state.products);
      if (index !== -1) {
        const { products } = state;
        products[index].quantity += 1;

        let { amount } = state;
        amount += action.payload.product.price;

        return { ...state, products, amount };
      }
      return state;
    },
    removeOneQuantityOfProduct: (state, action: PayloadAction<ProductCart>) => {
      const index = productInArray(action.payload.product, state.products);
      if (index !== -1) {
        const { products } = state;
        products[index].quantity -= 1;

        let { amount } = state;
        amount -= action.payload.product.price;

        return { ...state, products, amount };
      }
      return state;
    },
    removeProductInCart: (state, action: PayloadAction<ProductCart>) => {
      const index = productInArray(action.payload.product, state.products);
      if (index !== -1) {
        const { products } = state;
        let { amount } = state;
        amount -= products[index].product.price * products[index].quantity;

        products.splice(index);
        return { ...state, products, amount };
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
