import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromProducts from '../../core/reducers';
import { ProductsActions } from '../actions';
import { CustomSettings } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private _env: CustomSettings;
  constructor(private store: Store<fromProducts.State>) {
    this._env = environment as CustomSettings;
  }

  get onePageProducts() {
    return this.store.pipe(select(fromProducts.selectProducts));
  }

  get maxPageNumber() {
    return Math.ceil(this._env.application.maxProducts/this._env.application.productsPerPage);
  }

  initialLoad() {
    this.store.dispatch(ProductsActions.loadProducts());
  }  
}
