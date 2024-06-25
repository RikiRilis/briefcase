import { Routes } from "@angular/router";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ProjectModalComponent } from "../shared/components/project-modal/project-modal.component";

export const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'projects/:id',
    component: ProjectModalComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];
