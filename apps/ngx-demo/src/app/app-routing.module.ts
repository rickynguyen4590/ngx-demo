import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
const routes: Route[] = [
  {
    path: 'product',
    loadChildren: () => import('@ng13/product').then((m) => m.ProductModule),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('@ng13/rxjs').then((m) => m.RxjsModule),
  },
  {
    path: 'ng14',
    loadChildren: () => import('@ng13/ng14').then((m) => m.ROUTES),
  },
  {
    path: '',
    component: EmptyComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
