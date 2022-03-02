import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItem1Component } from './product-item1/product-item1.component';
import { ProductItem2Component } from './product-item2/product-item2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItem2Component,
    ProductItem1Component,
    ProductSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
