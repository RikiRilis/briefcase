import { Component } from '@angular/core';
import { Projects } from '../../../../interfaces/projects.interface';
import { ProjectsService } from '../../../../services/projects.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'projects-projects-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-card.component.html',
  styles: `
    .mask-image {
      mask-image: linear-gradient(to bottom, black 10%, transparent 100%);
    }

    .project-card:hover img {
      transform: scale(1.05);
    }

    .project-card:hover .detail-text {
      top: 0;
    }
  `
})
export class ProjectsCardComponent {
  public projects: Projects[] = ProjectsService;
  public projectDetailModal: boolean = false;
  public currentProject: Projects = {
    title: '',
    description: '',
    imgUrl: '',
    projectUrl: '',
    tecnologies: [],
    gitCodeUrl: ''
  };

  constructor(private router: Router) { }

  projectNavigation(index: number): void {
    this.router.navigate([`/portfolio/projects/', ${this.projects[index].title.replace(' ', '-').toLowerCase}`], { queryParams: { index: index } })
  }
}
