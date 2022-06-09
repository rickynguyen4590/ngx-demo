import { Route } from '@angular/router';
import { InjectComponent } from './inject/inject.component';
import { Ng14Component } from './ng14.component';
import { StandaloneComponentComponent } from './standalone-component/standalone-component.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: Ng14Component,
    children: [
      {
        path: 'single',
        component: StandaloneComponentComponent,
      },
      {
        path: 'inject',
        component: InjectComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'single',
      },
    ],
  },
];
