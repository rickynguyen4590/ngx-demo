import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
const routes: Route[] = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
