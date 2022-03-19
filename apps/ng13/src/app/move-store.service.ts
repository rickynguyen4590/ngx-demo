import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductStore extends ComponentStore<Product> {
  constructor() {
    super();
  }
}
