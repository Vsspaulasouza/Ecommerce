import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
