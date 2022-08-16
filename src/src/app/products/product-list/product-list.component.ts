import { Component, OnDestroy, OnInit } from '@angular/core';

import { Coffee, PageHeader } from 'src/app/core/models';
import { ProductDetailService, ProductListService } from 'src/app/core/services';
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
  constructor(private prodService: ProductListService,
              private detailService: ProductDetailService) {  
    this._env = environment as CustomSettings;
    this.tableSize = this._env.application.productsPerPage;
   }

  ngOnInit(): void {
    this.retrieveList();
    this.prodService.initialLoad();
  }

  retrieveList(): void {
    this.prodService.allProducts.subscribe(
      (products) => {
        this.productList = products;
      }
    );
  }

  findProdcutById(id: number): Coffee | undefined {
    return this.productList.find(product => product.id === id);
  }

  openDetailPopup(id: number) {
    let curProd = this.findProdcutById(id);
    if (curProd !== undefined && curProd) {
      this.detailService.open(curProd);
    }
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
