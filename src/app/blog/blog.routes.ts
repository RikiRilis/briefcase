import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    title: 'Blog | RikiRilis'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
