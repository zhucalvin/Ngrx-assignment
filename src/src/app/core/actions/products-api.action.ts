import { createAction, props } from '@ngrx/store';
import {Coffee} from './../models';

export const loadProducts = createAction(
  '[Products/API] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: Coffee[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ products: any }>()
);
