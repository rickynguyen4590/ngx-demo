import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangeAfterCheckComponent } from './change-after-check/change-after-check.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';
import { ProductItem1SubComponent } from './product-item1-sub/product-item1-sub.component';
import { ProductItem1Component } from './product-item1/product-item1.component';
import { ProductItem2Component } from './product-item2/product-item2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';

@NgModule({
  declarations: [
    ProductSummaryComponent,
    ProductListComponent,
    ProductItem1Component,
    ProductItem1SubComponent,
    ProductItem2Component,
    MemoryLeakComponent,
    ChangeAfterCheckComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProductSummaryComponent,
    ProductListComponent,
    MemoryLeakComponent,
    ChangeAfterCheckComponent,
  ],
})
export class ProductModule {}
