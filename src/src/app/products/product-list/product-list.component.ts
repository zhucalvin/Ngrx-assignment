import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Coffee, PageHeader } from 'src/app/core/models';
import { ProductListService } from 'src/app/core/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public pageHeader:PageHeader = { title : "Product List", icon : "inventory_2"} ;

  public productList: Coffee[] = [];
  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 10;
  public tableSizes: any = [5, 10, 15, 20];
  
  retrievedProducts$: Observable<Coffee[]>;
  currentPageNumber$: Observable<number>;
  public maxPageNumber: number;

  constructor(private prodService: ProductListService) {   
    this.retrievedProducts$ = this.prodService.onePageProducts;
    this.currentPageNumber$ = this.prodService.currentPageNumber;
    this.maxPageNumber = this.prodService.maxPageNumber;
  }

  ngOnInit(): void {
    this.retrieveList();
    this.prodService.initialLoad();
  }

  retrieveList(): void {
    this.prodService.onePageProducts.subscribe(
      (products) => {
        this.productList = products;
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.retrieveList();
  }

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.retrieveList();
  }
}
