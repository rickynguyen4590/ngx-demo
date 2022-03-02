import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
const routes: Route[] = [
  {
    path: 'test',
    loadChildren: () => import('@ng13/test').then((m) => m.TestModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
