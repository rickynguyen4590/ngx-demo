import { Component, Input, OnInit } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, tap } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'nv-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ComponentStore],
})
export class ProductListComponent implements OnInit {
  @Input() productList!: Product[];

  readonly movies$ = this.componentStore.state$.pipe(
    map((state) => state.movies)
    // tap(abx => console.log(abx))
  );

  constructor(
    private readonly componentStore: ComponentStore<{ movies: Product[] }>
  ) {}

  ngOnInit(): void {
    return;
  }
}
