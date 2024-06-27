import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Projects } from '../../interfaces/projects.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'shared-project-modal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-modal.component.html',
  styles: `
    #project-modal {
      --animate-duration: 0.2s;
    }

    .mask-image {
      mask-image: linear-gradient(to bottom, black 10%, transparent 100%);
    }
  `
})
export class ProjectModalComponent implements OnInit, OnDestroy {
  public id?: string;
  public index?: number;
  public project: Projects = {
    id: '',
    title: '',
    description: '',
    imgUrl: '',
    projectUrl: '',
    tecnologies: [],
    gitCodeUrl: ''
  };
  public oldTitle?: string;

  constructor(private location: Location, private route: ActivatedRoute, private projectsService: ProjectsService, private title: Title) { }

  ngOnInit(): void {
    this.oldTitle = this.title.getTitle();
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id')?.toString();
      this.index = Number(params.get('prop'));
      this.project = this.projectsService.getProjets()[this.index];
      this.title.setTitle(`Projects - ${this.project.title} | RikiRilis`);
    });
  }

  ngOnDestroy(): void {
    this.title.setTitle(this.oldTitle!);
  }
  closePage(): void {
    this.location.back();
  }
}
