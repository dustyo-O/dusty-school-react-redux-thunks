import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { ShowCase } from './components/ShowCase/ShowCase';
import { ProductForm } from './components/ProductForm/ProductForm';
import { addProductRequest } from './store/products/thunks';
import { CreateProductPayload } from './types/Product';
import { AppDispatch } from './store/store';
import { cnApp } from './App.classname';

import './App.css';

type Pages = 'list' | 'add' | 'edit';

const App = () => {
  const [page, setPage] = useState<Pages>('list');
  const [productId, setProductId] = useState<number | undefined>(undefined);

  const handleOpenAddPage = () => {
    setPage('add');
  };

  const handleProductEdit = (id: number) => {
    setPage('edit');
    setProductId(id);
  };

  const handleBack = () => {
    setPage('list');
    setProductId(undefined);
  };

  return (
    <div className={cnApp()}>
      <Button primary onClick={handleOpenAddPage}>Add product</Button>
      <Button type="button" onClick={handleBack}>Back</Button>
      {page === 'list' && <ShowCase onEdit={handleProductEdit}/>}
      {page === 'add' && <ProductForm />}
      {page === 'edit' && productId !== undefined && <ProductForm productId={productId}/>}
    </div>
  );
}

export { App };
