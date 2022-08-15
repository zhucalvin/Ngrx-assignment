import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProductsActions } from 'src/app/core/actions';
import { Coffee, PageHeader } from 'src/app/core/models';
import * as fromProducts from '../../core/reducers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public pageHeader:PageHeader = { title : "Product List", icon : "inventory_2"} ;

  retrievedProducts$: Observable<Coffee[]>;

  constructor(private store: Store<fromProducts.State>) {   
    this.retrievedProducts$ = this.store.pipe(select(fromProducts.selectProducts));
  }

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
