import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Product, SubProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'nv-product-item1',
  templateUrl: './product-item1.component.html',
  styleUrls: ['./product-item1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItem1Component implements OnInit {
  @Input() product!: Product;

  time: Date;

  subs?: SubProduct[];

  subs$?: Observable<SubProduct[]>;

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

    this.subs$ = this.productService.getSubProducts(id);
  }

  displaySub(subs?: SubProduct[]) {
    console.log('displaySub');
    return JSON.stringify(subs);
  }

  // @HostListener('mousemove')
  // croll() {
  //   return;
  // }
}
