import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons'

import type { ProductWithState } from '../../types/Product';
import { deleteProductRequest } from '../../store/products/thunks';
import { cnProduct } from './Product.classname';
import { AppDispatch } from '../../store/store';

import './Product.css';

type ProductProps = {
  product: ProductWithState;
  onEdit: (id: number) => void;
};

const Product: FC<ProductProps> = ({ product, onEdit }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteProductRequest(product.id));
  }

  const handleEdit = () => {
    onEdit(product.id);
  }

  return (
    <div className={cnProduct()}>
      {product.title}
      {product.deleting ? <FontAwesomeIcon icon={faSpinner} spin={true} /> :
        <>
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </>
      }
    </div>
  );
}

export { Product };
