import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product, SubProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'ng13-product-item1',
  templateUrl: './product-item1.component.html',
  styleUrls: ['./product-item1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItem1Component implements OnInit {
  @Input() product!: Product;

  time: Date;

  subs?: SubProduct[];

  loading = '';

  constructor(
    private cd: ChangeDetectorRef,
    private productService: ProductService,
    ) {
    this.time = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  getSubs(id: number) {
    this.loading = 'Loading...';
    this.productService.getSubProducts(id).subscribe(subs => {
      this.subs = subs;
      this.loading = 'Loaded';
    });
  }

  displaySub(subs?: SubProduct[]) {
    console.log('displaySub');
    return JSON.stringify(subs);
  }
}