import {
    createSelector,
    createFeatureSelector,
    combineReducers,
    Action,
  } from '@ngrx/store';

import * as fromRoot from '../../reducers';

import {
  ProductsActions
} from '../actions';

import { Coffee } from '../models';
import * as fromProducts from './products.reducer'

export const productsModuleFeatureKey = 'productsModule';

export interface State {
    [fromProducts.productsFeatureKey]: fromProducts.State;
}

export interface State extends fromRoot.State {
    [productsModuleFeatureKey]: State;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: State | undefined, action: Action) {
    return combineReducers({
      [fromProducts.productsFeatureKey]: fromProducts.productsReducer,
    })(state, action);
}

export const selectProductsModuleState =
  createFeatureSelector<State>(productsModuleFeatureKey);

 export const selectProductsState = createSelector(
    selectProductsModuleState,
    () => fromProducts.getProducts
  );