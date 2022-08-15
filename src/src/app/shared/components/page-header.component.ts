import { Component, Input } from '@angular/core';
import { PageHeader } from '../../core/models';

@Component({
  selector: 'app-page-header',
  template: `
   <div class="col-xl-12 pb-2 mt-3 mb-2 pageHeader border-bottom mb-3">
    <span class="material-icons material-symbols-outlined">
      {{ pageHeader.icon }}
    </span>
    <span Id="pageHeaderTitle"> {{ pageHeader.title }}</span>
   </div>
`,
  styles: [`
  .pageHeader {
    font-size: 1.4rem !important;
    font-weight:bold !important;
    opacity: .6 !important;

    .material-icons {
      font-size: 1.2rem !important;
    }
  }`]
})
export class PageHeaderComponent {

  @Input() public pageHeader: PageHeader = new PageHeader();
  constructor() { }
}
