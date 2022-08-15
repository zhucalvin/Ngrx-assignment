import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from '.';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '../core/effects';
import * as fromProducts from '../core/reducers';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
     StoreModule.forFeature(fromProducts.productsModuleFeatureKey, fromProducts.reducers),

     /**
      * Effects.forFeature is used to register effects
      * from feature modules. Effects can be loaded
      * eagerly or lazily and will be started immediately.
      *
      * All Effects will only be instantiated once regardless of
      * whether they are registered once or multiple times.
      */
     EffectsModule.forFeature([ProductsEffects]),
  ]
})
export class ProductsModule { }
