import { createReducer, on } from '@ngrx/store';

import { PaginationActions } from '../actions';

export const paginationFeatureKey = 'product-grid-counter';

export interface State {
  currentPageCounter: number
}

export const initialState: State = {
    currentPageCounter: 1
}

export const pageCounterReducer = createReducer(
  initialState,
  on(PaginationActions.nextPage, (state: State) => ({currentPageCounter: state.currentPageCounter + 1 })),
  on(PaginationActions.previousPage, (state: State) => ({currentPageCounter: state.currentPageCounter - 1 })),
  on(PaginationActions.navigateTo, (state: State, {id}) => ({currentPageCounter: id })),  
);

export const selectCurrentPageNumber = (state: State) => state.currentPageCounter;
