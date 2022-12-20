import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { IndexComponent } from './home/index/index.component';

export const mainRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},

    ]
  }
];
