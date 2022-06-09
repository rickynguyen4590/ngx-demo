import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'nv-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss'],
})
export class ProductSummaryComponent implements OnInit {
  constructor() {}

  @Input() productList!: Product[];

  ngOnInit(): void {}

  getTotalItems() {
    // console.log('getTotalItems');
    return this.productList.length;
  }
}
