import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectModalComponent } from '../shared/pages/project-modal/project-modal.component';

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    title: 'Projects | RikiRilis'
  },
  {
    path: 'details/:id',
    component: ProjectModalComponent,
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
