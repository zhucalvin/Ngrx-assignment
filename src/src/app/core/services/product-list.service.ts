import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as fromProducts from '../../core/reducers';
import { ProductsActions } from '../actions';
import { Coffee, CustomSettings } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private _currentPageNumber: BehaviorSubject<number>; 
  private productsGridState: {
    pageSize: number,
    currentPageNumber: number
    pageStart: number
  };

  private _env: CustomSettings;
  constructor(private store: Store<fromProducts.State>) {
    this._env = environment as CustomSettings;
    this._currentPageNumber = <BehaviorSubject<number>>new BehaviorSubject(1);
    this.productsGridState = { pageSize: this._env.application.productsPerPage, currentPageNumber: 1, pageStart: 0 }
  }

  get onePageProducts() {
    return this.store.pipe(select(fromProducts.selectProducts)).pipe(map(data => data.slice(this.productsGridState.pageStart, this.productsGridState.pageSize)));
  }

  get currentPageNumber() {
    return this._currentPageNumber.asObservable();
  }

  get maxPageNumber() {
    return Math.ceil(this._env.application.maxProducts/this._env.application.productsPerPage);
  }

  initialLoad() {
    this.store.dispatch(ProductsActions.loadProducts());
  }  

  prevPage() {
    if (this.productsGridState.currentPageNumber > 1) {
      this.productsGridState.currentPageNumber --;
      this._currentPageNumber.next(Object.assign({}, this.productsGridState).currentPageNumber);
    }
  }

  nextPage() {
    if (this.productsGridState.currentPageNumber < this.maxPageNumber) {
      this.productsGridState.currentPageNumber ++;
      this._currentPageNumber.next(Object.assign({}, this.productsGridState).currentPageNumber);
    }
  }

  navigateTo(pageNum: number) {
    this.productsGridState.currentPageNumber = pageNum;
    this._currentPageNumber.next(Object.assign({}, this.productsGridState).currentPageNumber);
  }
}
