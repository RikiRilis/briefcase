import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModalComponent } from '../../../../shared/pages/project-modal/project-modal.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { ProjectsCardComponent } from '../../../../shared/components/projects-card/projects-card.component';

@Component({
  selector: 'sections-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent, RouterLink, TecnologiesComponent, ProjectsCardComponent],
  templateUrl: './projects.component.html',
  styles: ``
})
export class ProjectsComponent implements OnInit {
  public lastRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.lastRoute = this.router.url;
      }
    });
  }
}
