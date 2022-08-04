import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

const routes: Route[] = [
  {
    path: '',
    component: ProductDashboardComponent,
  },
  {
    path: 'new',
    component: FormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ProductRoutingModule { }
