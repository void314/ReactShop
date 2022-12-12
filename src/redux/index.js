import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import itemsReducer from './product/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        item: itemsReducer
    }
  })