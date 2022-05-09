import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AsyncComponent } from './async/async.component';
import { RxjsRoutingModule } from './rxjs-routing.module';

@NgModule({
  imports: [CommonModule, RxjsRoutingModule, HttpClientModule],
  declarations: [AsyncComponent],
})
export class RxjsModule {}
