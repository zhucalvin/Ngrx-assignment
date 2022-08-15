import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProductsActions } from 'src/app/core/actions';
import { PageHeader } from 'src/app/core/models';
import * as fromProducts from '../../core/reducers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public pageHeader:PageHeader = { title : "Product List", icon : "inventory_2"} ;
  
  retrievedProducts$: any;

  constructor(private store: Store<fromProducts.State>) {   
    this.store.dispatch(ProductsActions.loadProducts());
  }

  ngOnInit(): void {
    this.retrievedProducts$ = this.store.select(fromProducts.selectProductsState);
  }
}
