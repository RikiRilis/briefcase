import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectModalComponent } from './shared/components/project-modal/project-modal.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { PortfolioComponent } from './portfolio/components/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];
