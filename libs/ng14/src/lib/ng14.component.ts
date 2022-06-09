import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: '<router-outlet></router-outlet>',
})
export class Ng14Component {}
