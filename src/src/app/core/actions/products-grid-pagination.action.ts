import { createAction, props } from '@ngrx/store';

export const nextPage = createAction('[Product Grid Page Counter] Next');
export const previousPage = createAction('[Product Grid Page Counter] Previous');
export const navigateTo = createAction('[Product Grid Page Counter] NavigateTo', props<{ id: number }>());