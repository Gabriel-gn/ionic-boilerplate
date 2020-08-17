import {Routes} from '@angular/router';

import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./pages/login-pages/login-pages.module').then(m => m.LoginPagesModule)}
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./pages/dashboard-pages/dashboard-pages.module').then(m => m.DashboardPagesModule)}
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
