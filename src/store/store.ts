import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './products';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  //@ts-expect-error
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
