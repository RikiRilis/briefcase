import { Routes } from '@angular/router';
import { WebComponent } from './components/web/web/web.component';

export const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    title: 'RikiRilis'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
