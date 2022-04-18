import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItem1Component } from './product-item1/product-item1.component';
import { ProductItem2Component } from './product-item2/product-item2.component';
import { ProductItem1SubComponent } from './product-item1-sub/product-item1-sub.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';

@NgModule({
  declarations: [
    ProductSummaryComponent,
    ProductListComponent,
    ProductItem1Component,
    ProductItem1SubComponent,
    ProductItem2Component,
    MemoryLeakComponent,
  ],
  imports: [CommonModule],
  exports: [ProductSummaryComponent, ProductListComponent, MemoryLeakComponent],
})
export class ProductModule {}
