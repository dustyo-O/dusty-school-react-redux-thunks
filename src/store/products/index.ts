import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { ProductWithState, Product } from '../../types/Product';

export type ProductsState = {
  products: ProductWithState[];
  loading: boolean;
  total?: number;
};

const INITIAL_STATE: ProductsState = {
  products: [],
  loading: false,
  total: undefined,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    addMany: (state, action: PayloadAction<Product[]>) => {
      state.products = [...state.products, ...action.payload];
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.map(product => {
        if (product.id === action.payload.id) {
          return action.payload;
        }

        return product;
      });
    },
    startDeleting: (state, action: PayloadAction<number>) => {
      const product = state.products.find(product => product.id === action.payload);

      if (!product) {
        throw new Error('no such product');
      }

      product.deleting = true;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  addMany,
  startLoading,
  finishLoading,
  setTotal,
  startDeleting,
  deleteProduct,
  editProduct,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
