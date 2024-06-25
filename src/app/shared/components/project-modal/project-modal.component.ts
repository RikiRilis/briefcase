import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../../portfolio/interfaces/projects.interface';

@Component({
  selector: 'shared-project-modal',
  standalone: true,
  imports: [CommonModule],
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
export class ProjectModalComponent {
  @Input() public project: Projects = {
    title: '',
    description: '',
    imgUrl: '',
    projectUrl: '',
    tecnologies: [],
    gitCodeUrl: ''
  };
  @Output() public closeModalEvent: EventEmitter<boolean> = new EventEmitter();

  closeModal(): void {
    this.closeModalEvent.emit(true);
  }
}
