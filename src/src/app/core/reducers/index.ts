import { Coffee } from '../models';

import {
    createSelector,
    createFeatureSelector,
    combineReducers,
    Action,
  } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromProducts from './products.reducer';

export const productsModuleFeatureKey = 'productsModule';

export interface ProductState {
    [fromProducts.productsFeatureKey]: fromProducts.State;
}

export interface State extends fromRoot.State {
    [productsModuleFeatureKey]: ProductState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: ProductState | undefined, action: Action) {
    return combineReducers({
      [fromProducts.productsFeatureKey]: fromProducts.productsReducer
    })(state, action);
}

export const selectProductsModuleState =
  createFeatureSelector<ProductState>(productsModuleFeatureKey);

export const selectProducts = createSelector(
  selectProductsModuleState,
  (state) => state[fromProducts.productsFeatureKey].products
);
