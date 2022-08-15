import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as fromProducts from '../../core/reducers';
import { ProductsActions, PaginationActions } from '../actions';
import { Coffee, CustomSettings } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private productsGridState: {
    pageSize: number,
    pageStart: number
  };

  private _env: CustomSettings;
  constructor(private store: Store<fromProducts.State>) {
    this._env = environment as CustomSettings;
    this.productsGridState = { pageSize: this._env.application.productsPerPage, pageStart: 0 }
  }

  get onePageProducts() {
    return this.store.pipe(select(fromProducts.selectProducts)).pipe(map(data => data.slice(this.productsGridState.pageStart, this.productsGridState.pageSize)));
  }

  get currentPageNumber() {
    return this.store.pipe(select(fromProducts.selectCurrentPageNumber));
  }

  get maxPageNumber() {
    return Math.ceil(this._env.application.maxProducts/this._env.application.productsPerPage);
  }

  initialLoad() {
    this.store.dispatch(ProductsActions.loadProducts());
  }  

  prevPage() {
    this.store.dispatch(PaginationActions.previousPage());
  }

  nextPage() {
    this.store.dispatch(PaginationActions.nextPage());
  }

  navigateTo(pageNum: number) {
    this.store.dispatch(PaginationActions.navigateTo({id: pageNum}));
  }
}
