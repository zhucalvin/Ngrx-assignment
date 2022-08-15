import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/core/services';

@Component({
  selector: 'app-pagination',
  template: `
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item clickable">
        <a class="page-link" (click)="prevPage()" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item clickable" *ngFor='let in of counter(maxPages) ;let i = index' ><a class="page-link" (click)="navigateTo(i)">{{i}}</a></li>
      <li class="page-item clickable">
        <a class="page-link" (click)="nextPage()" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  `,
  styles: [
  ]
})
export class PaginationComponent implements OnInit {

  public maxPages: number = 0;
  constructor(private prodListSerivce: ProductListService) { }

  ngOnInit(): void {
    this.maxPages = this.prodListSerivce.maxPageNumber;
  }

  counter(i: number) {
    return new Array(i);
  }

  nextPage() {
    this.prodListSerivce.nextPage();
  }
 
  prevPage() {
    this.prodListSerivce.prevPage();
  }

  navigateTo(id: number) {
    this.prodListSerivce.navigateTo(id);
  }
}
