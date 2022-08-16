import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from '../../products';
import { Coffee } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(product: Coffee): void {
    const modalRef = this.modalService.open(ProductDetailComponent);
    modalRef.componentInstance.product = product ;
  }
}
