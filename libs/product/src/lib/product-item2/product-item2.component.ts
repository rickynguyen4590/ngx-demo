import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'ng13-product-item2',
  templateUrl: './product-item2.component.html',
  styleUrls: ['./product-item2.component.scss'],
})
export class ProductItem2Component implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
