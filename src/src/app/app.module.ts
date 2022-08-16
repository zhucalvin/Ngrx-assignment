import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ProductsEffects } from './core/effects';

import { ROOT_REDUCERS } from 'src/app/reducers';
import { AppRoutingModule } from './app-routing.module';
import { ProductsRoutingModule } from './products/products-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './public';
import { HeaderComponent, FooterComponent } from './public/shared';
import { ProductDetailComponent } from './products';
import { ProductListService, ProductDetailService } from './core/services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsRoutingModule,
    HttpClientModule,
    NgbModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot(),

    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Ngrx Assignment',
      maxAge: 25, 
      logOnly: environment.production 
    })
  ],
  providers: [ 
    ProductListService, 
    ProductDetailService 
  ],
  
  // dynamic components
  entryComponents: [
    ProductDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
