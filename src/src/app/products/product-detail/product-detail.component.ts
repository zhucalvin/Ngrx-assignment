import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Coffee } from 'src/app/core/models';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Product Detail</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <table class="table table-striped table-bordered table-hover">
            <tbody>
                <tr>
                  <td>Product Id</td>
                  <td>{{ product.id }}</td>
                </tr>
                <tr>
                  <td>Blend Name</td>
                  <td>{{ product.blend_name }}</td>
                </tr>
                <tr>
                  <td>Origin</td>
                  <td>{{ product.origin }}</td>
                </tr>
                <tr>
                  <td>Variety</td>
                  <td>{{ product.variety }}</td>
                </tr>
                <tr>
                  <td>Intensifier</td>
                  <td>{{ product.intensifier }}</td>
                </tr>
                <tr>
                  <td>Notes</td>
                  <td>{{ product.notes }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ProductDetailComponent {
  @Input() product: Coffee = new Coffee();

  constructor(public activeModal: NgbActiveModal) {}
}