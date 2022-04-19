import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

const routes: Route[] = [
  {
    path: '',
    component: ProductDashboardComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ProductRoutingModule {}
