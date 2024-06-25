import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./web/web-routing.routes').then(m => m.routes)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio-routing.routes').then(m => m.routes)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog-routing.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: ''
  },
];
