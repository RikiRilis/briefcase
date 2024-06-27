import { Component } from '@angular/core';
import { Projects } from '../../interfaces/projects.interface';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

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
  public projects: Projects[] = this.projectsService.getProjets().slice(0, 4);

  constructor(private router: Router, private projectsService: ProjectsService) { }

  projectNavigation(index: number): void {
    this.router.navigate(
      [`projects/details/${this.projects[index].title.replace(' ', '-').toLowerCase()}`],
      {
        queryParams: { id: this.projects[index].id, prop: index }
      }
    )
  }
}
