import { Route } from '@angular/router';
import { CDParentComponent } from './cd/example.component';
import { CDComponentLevel1Component } from './cd/level-1.component';
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
        path: 'cd',
        component: CDComponentLevel1Component,
      },
      {
        path: 'cdexample',
        component: CDParentComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'single',
      },
    ],
  },
];
