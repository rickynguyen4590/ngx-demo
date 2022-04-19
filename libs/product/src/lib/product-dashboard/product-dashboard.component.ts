import { Component } from '@angular/core';
import { Product } from '../product';

const allProduct = [
  {
    Id: 1,
    Name: 'Product 1',
  },
  {
    Id: 2,
    Name: 'Product 2',
  },
  {
    Id: 3,
    Name: 'Product 3',
  },
];

@Component({
  selector: 'ng13-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent {
  title = 'ng13';

  products: Product[] = [...allProduct];

  count = 3;

  appClick() {
    this.products.push({
      Id: this.count++,
      Name: `Product ${this.count}`,
    });
  }

  updateRef() {
    this.products[2].Name = 'Thanos';
  }

  reset() {
    this.products = [...allProduct];
  }

  // @HostListener('mousemove')
  // croll(event: MouseEvent) {
  //   // console.log(event);
  //   return;
  // }
}
