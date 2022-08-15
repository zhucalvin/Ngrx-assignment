import { createReducer, on } from '@ngrx/store';

import { ProductsActions } from '../actions';
import { Coffee } from '../models';

export const productsFeatureKey = 'product';

export interface State {
  products: Coffee[];
}

export const initialState: State = {
  products: []
}

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ( { products} ))
);

export const getProducts = (state: State) => state.products;