import { RootState } from '../store';

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsLoading = (state: RootState) => state.products.loading;
export const selectProductsHaveMore = (state: RootState) =>
  state.products.total === undefined ||
  state.products.total > state.products.products.length;

export const selectProduct = (productId: number | undefined) => (state: RootState) =>
  state.products.products.find(product => product.id === productId);
