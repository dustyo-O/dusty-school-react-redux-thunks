import { ThunkAction, UnknownAction, createAsyncThunk } from '@reduxjs/toolkit';

import { addMany, deleteProduct, editProduct, finishLoading, setTotal, startDeleting, startLoading } from '.';
import { RootState } from '../store';
import { ProductsResponse } from '../../types/api/products';
import { CreateProductPayload, Product } from '../../types/Product';
import { title } from 'process';

// export const fetchGoods = (): ThunkAction<void, RootState, unknown, UnknownAction> => async dispatch => {
//   const response = await fetch('https://dummyjson.com/products?limit=30');

//   const products: { products: Product[] } = await response.json();

//   dispatch(addMany(products.products));
// };

export const fetchProducts = createAsyncThunk<void, void, { state: RootState }>(
  'products/fetchProducts',
  async (_, { dispatch, getState }) => {
    const count = getState().products.products.length;

    dispatch(startLoading());
    const response = await fetch(`https://dummyjson.com/products?limit=30&skip=${count}`);

    const products: ProductsResponse = await response.json();

    dispatch(setTotal(products.total));
    dispatch(addMany(products.products));
    dispatch(finishLoading());
  }
);

export const deleteProductRequest = createAsyncThunk<void, number, { state: RootState }>(
  'products/fetchProducts',
  async (productId: number, { dispatch, getState }) => {
    dispatch(startDeleting(productId));
    const response = await fetch(`https://dummyjson.com/products/${productId}`, {
      method: 'DELETE',
    });

    const product: Product = await response.json();

    dispatch(deleteProduct(product.id));
  }
);

export const addProductRequest = createAsyncThunk<void, CreateProductPayload, { state: RootState }>(
  'products/fetchProducts',
  async (productData: CreateProductPayload, { dispatch, getState }) => {
    console.log('addProductRequest');
    dispatch(startLoading());
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });

    const product: Product = await response.json();

    dispatch(addMany([product]));
    dispatch(finishLoading());
  }
);

export const editProductRequest = createAsyncThunk<void, CreateProductPayload & { id: number }, { state: RootState }>(
  'products/fetchProducts',
  async (productData: CreateProductPayload  & { id: number }, { dispatch, getState }) => {

    dispatch(startLoading());
    const response = await fetch(`https://dummyjson.com/products/${productData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: productData.title, description: productData.description }),
    });

    const product: Product = await response.json();

    dispatch(editProduct(product));
    dispatch(finishLoading());
  }
);
