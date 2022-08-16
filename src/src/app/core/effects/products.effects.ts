import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductRepositoryService } from '../repositories';
import { ProductsActions } from '../actions'
import { Coffee } from '../models';
 
@Injectable()
export class ProductsEffects {
 
  loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ProductsActions.loadProducts),
        mergeMap(() => this.prodRepo.retrieveAllCoffeeProducts()
          .pipe(
            map((products: Coffee[]) => 
            ProductsActions.loadProductsSuccess({ products })),
            catchError(() => of(ProductsActions.loadProductsFailure))
          ))
        )
  );
  
  constructor(
    private actions$: Actions,
    private prodRepo: ProductRepositoryService
  ) {}
}