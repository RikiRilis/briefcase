import { Routes } from '@angular/router';
import { WebComponent } from './web/components/web/web/web.component';
import { Error404PageComponent } from './shared/pages/error-404-page/error-404-page.component';

export const routes: Routes = [
  {
    path: '',
    component: WebComponent
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.routes').then(m => m.routes)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.routes').then(m => m.routes)
  },
  {
    path: 'web',
    loadChildren: () => import('./web/web.routes').then(m => m.routes)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.routes').then(m => m.routes)
  },
  {
    path: '404',
    component: Error404PageComponent,
    title: '404 | RikiRilis'
  },
  {
    path: '**',
    redirectTo: '404'
  },
];
