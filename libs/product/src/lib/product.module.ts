import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductItem1SubComponent } from './product-item1-sub/product-item1-sub.component';
import { ProductItem1Component } from './product-item1/product-item1.component';
import { ProductItem2Component } from './product-item2/product-item2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductSummaryComponent,
    ProductListComponent,
    ProductItem1Component,
    ProductItem1SubComponent,
    ProductItem2Component,
    ProductDashboardComponent,
    FormComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, ReactiveFormsModule, RouterModule],
})
export class ProductModule {}
