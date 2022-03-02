import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SearchClaimComponent } from './search-claim/search-claim.component';

const routers: Route[] = [
  {
    path: '',
    component: SearchClaimComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
  providers: [],
})
export class TestRoutingModule {}
