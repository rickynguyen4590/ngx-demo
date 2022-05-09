import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { ChangeAfterCheckComponent } from './change-after-check/change-after-check.component';
import { InnerComponent } from './change-after-check/inner/inner.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';

const routes: Route[] = [
  {
    path: 'memory-leak',
    component: MemoryLeakComponent,
  },
  {
    path: 'change-after-check',
    component: ChangeAfterCheckComponent,
  },
  {
    path: 'async',
    component: AsyncComponent,
  },
];

@NgModule({
  declarations: [
    MemoryLeakComponent,
    ChangeAfterCheckComponent,
    InnerComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RxjsRoutingModule {}
