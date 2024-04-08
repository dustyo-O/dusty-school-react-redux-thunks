import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '../Product/Product';
import { fetchProducts } from '../../store/products/thunks';
import { cnShowCase } from './ShowCase.classname';
import { selectProducts, selectProductsHaveMore, selectProductsLoading } from '../../store/products/selectors';
import { AppDispatch } from '../../store/store';

import './ShowCase.css';

type ShowCaseProps = {
  onEdit: (id: number) => void;
}

const ShowCase: FC<ShowCaseProps> = ({ onEdit }) => {
  const products = useSelector(selectProducts);
  const productsLoading = useSelector(selectProductsLoading);
  const productsHaveMore = useSelector(selectProductsHaveMore);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (products.length > 0) {
      return;
    }

    dispatch(fetchProducts());
//    dispatch(fetchGoods());
  }, [dispatch, products.length]);

  const handleLoadMore = () => {
    dispatch(fetchProducts());
  };

  return (
    <div className={cnShowCase()}>
      {products.map(product => <Product key={product.id} product={product} onEdit={onEdit} />)}
      {productsLoading ?
        'Загрузка...' :
        productsHaveMore && <button className={cnShowCase('More')} onClick={handleLoadMore}>Загрузить ещё</button>
      }
    </div>
  );
}

export { ShowCase };
