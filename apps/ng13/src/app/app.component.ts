import { Component, HostListener } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'ng13-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng13';

  products: Product[] = [
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

  @HostListener('mousemove')
  croll(event: MouseEvent) {
    // console.log(event);
    return;
  }
}
