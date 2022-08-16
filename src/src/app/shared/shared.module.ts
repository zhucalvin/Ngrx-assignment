import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components';



@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class SharedModule { }
