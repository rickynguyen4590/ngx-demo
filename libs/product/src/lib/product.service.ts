import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { SubProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getSubProducts(productId: number): Observable<SubProduct[]> {
    const subs: SubProduct[] = [
      {
        ProductId: productId,
        Id: 1000 * productId + 1,
        Brand: 'Brand HCM',
      },
      {
        ProductId: productId,
        Id: 1000 * productId + 2,
        Brand: 'Brand HN',
      },
      {
        ProductId: productId,
        Id: 1000 * productId + 3,
        Brand: 'Brand Long An',
      },
    ];
    return of(subs).pipe(delay(500));
  }
}
