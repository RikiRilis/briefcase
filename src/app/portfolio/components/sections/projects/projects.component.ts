import { Component, Inject, Renderer2 } from '@angular/core';
import { Projects } from '../../../interfaces/projects.interface';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ProjectModalComponent } from '../../../../shared/components/project-modal/project-modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sections-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent, RouterLink],
  templateUrl: './projects.component.html',
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
export class ProjectsComponent {
  public projects: Projects[] = [
    {
      title: 'PeakTrail',
      description: 'A website for an app designed for hiking and mountain enthusiasts. Discover and explore new trails, track your hikes, and share your adventures with the community.',
      imgUrl: 'assets/peaktrail.webp',
      projectUrl: '',
      tecnologies: ['Typescript', 'Tailwind CSS', 'Figma', 'Illustrator', 'NextJS'],
      gitCodeUrl: ''
    },
    {
      title: 'Hoobank',
      description: 'A beautiful and modern banking layout landing page for financial services oriented to identify the the products most likely to fit your needs.',
      imgUrl: 'assets/hoobank.webp',
      projectUrl: '',
      tecnologies: ['Typescript', 'Tailwind CSS', 'Figma', 'Illustrator', 'NextJS'],
      gitCodeUrl: ''
    },
    {
      title: 'PeakTrail',
      description: 'A website for an app designed for hiking and mountain enthusiasts. Discover and explore new trails, track your hikes, and share your adventures with the community.',
      imgUrl: 'assets/peaktrail.webp',
      projectUrl: '',
      tecnologies: ['Typescript', 'Tailwind CSS', 'Figma', 'Illustrator', 'NextJS'],
      gitCodeUrl: ''
    },
    {
      title: 'Hoobank',
      description: 'A beautiful and modern banking layout landing page for financial services oriented to identify the the products most likely to fit your needs.',
      imgUrl: 'assets/hoobank.webp',
      projectUrl: '',
      tecnologies: ['Typescript', 'Tailwind CSS', 'Figma', 'Illustrator', 'NextJS'],
      gitCodeUrl: ''
    },
  ]
  public projectDetailModal: boolean = false;
  public currentProject: Projects = {
    title: '',
    description: '',
    imgUrl: '',
    projectUrl: '',
    tecnologies: [],
    gitCodeUrl: ''
  };
  public currentTecnology?: string;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    protected renderer: Renderer2,
  ) { }

  openProject(index: number): void {
    this.currentProject = this.projects[index];
    this.projectDetailModal = true;
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden')
  }

  closeProject(): void {
    this.projectDetailModal = false;
    this.renderer.removeStyle(this.document.body, 'overflow');
  }

  onMouseEnterTecnology(tecnology: string): void {
    this.currentTecnology = tecnology;
  }

  onMouseLeaveTecnology(): void {
    this.currentTecnology = '';
  }
}
