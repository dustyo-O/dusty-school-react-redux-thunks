import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormField, Button, Loader, Dimmer } from 'semantic-ui-react';

import { AppDispatch } from '../../store/store';
import { addProductRequest, editProductRequest } from '../../store/products/thunks';
import { selectProduct, selectProductsLoading } from '../../store/products/selectors';
import { cnProductForm } from './ProductForm.classname';

import './ProductForm.css';

type FormState = {
  title: string;
  description: string;
};

const INITIAL_STATE = {
  title: '',
  description: '',
};

type ProductFormProps = {
  productId?: number;
}

const ProductForm: FC<ProductFormProps> = ({ productId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const productsLoading = useSelector(selectProductsLoading);
  const editingProduct = useSelector(selectProduct(productId));

  const [form, setForm] = useState<FormState>(editingProduct ? {
    title: editingProduct.title,
    description: editingProduct.description,
  } : INITIAL_STATE);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (productId) {
      dispatch(editProductRequest({ id: productId, ...form }));
    } else {
      dispatch(addProductRequest(form));
    }
  };

  useEffect(() => {
    if (productsLoading === true) {
      return;
    }

    if (!editingProduct) setForm(INITIAL_STATE);
  }, [editingProduct, productsLoading]);

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  };

  return (
    <Form onSubmit={handleFormSubmit} className={cnProductForm()}>
      {productsLoading ?
        <Dimmer active>
          <Loader />
        </Dimmer> :
        <>
          <FormField>
            <label>Title</label>
            <input placeholder="Title" name="title" onChange={handleFieldChange} value={form.title} />
          </FormField>
          <FormField>
            <label>Description</label>
            <textarea placeholder="Description" name="description" onChange={handleFieldChange} value={form.description} />
          </FormField>
          <Button type='submit'>Submit</Button>
        </>
      }
    </Form>
  );
}

export { ProductForm };
