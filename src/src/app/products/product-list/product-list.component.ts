import { Component, OnInit } from '@angular/core';
import { Observable, timeout } from 'rxjs';

import { Coffee, PageHeader } from 'src/app/core/models';
import { ProductListService } from 'src/app/core/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public pageHeader:PageHeader = { title : "Product List", icon : "inventory_2"} ;

  retrievedProducts$: Observable<Coffee[]>;
  currentPageNumber$: Observable<number>;
  public maxPageNumber: number;

  constructor(private prodService: ProductListService) {   
    this.retrievedProducts$ = this.prodService.onePageProducts;
    this.currentPageNumber$ = this.prodService.currentPageNumber;
    this.maxPageNumber = this.prodService.maxPageNumber;
  }

  ngOnInit(): void {
    this.prodService.initialLoad();
  }
}
