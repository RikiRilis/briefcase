import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Projects } from '../../../portfolio/interfaces/projects.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../../../portfolio/services/projects.service';

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
export class ProjectModalComponent implements OnInit {
  public index?: number;
  public project: Projects = {
    title: '',
    description: '',
    imgUrl: '',
    projectUrl: '',
    tecnologies: [],
    gitCodeUrl: ''
  };

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.index = Number(params.get('index'));
      this.project = ProjectsService[this.index]

    });
  }

  closePage(): void {
    this.location.back();
  }
}
