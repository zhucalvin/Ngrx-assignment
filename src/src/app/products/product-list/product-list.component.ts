import { Component, OnDestroy, OnInit } from '@angular/core';

import { Coffee, PageHeader } from 'src/app/core/models';
import { ProductListService } from 'src/app/core/services';
import { environment } from 'src/environments/environment';
import { CustomSettings } from '../../core/models';

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
  public tableSize: number = 0;
  
  private _env: CustomSettings;
  constructor(private prodService: ProductListService) {  
    this._env = environment as CustomSettings;
    this.tableSize = this._env.application.productsPerPage;
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
