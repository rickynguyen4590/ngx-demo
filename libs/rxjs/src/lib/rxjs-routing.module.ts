import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChangeAfterCheckComponent } from './change-after-check/change-after-check.component';
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
];

@NgModule({
  declarations: [MemoryLeakComponent, ChangeAfterCheckComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RxjsRoutingModule {}
