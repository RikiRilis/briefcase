import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsComponent } from '../../../portfolio/components/sections/projects/projects.component';
import { ProjectModalComponent } from '../../../shared/components/project-modal/project-modal.component';
import { ContactComponent } from '../../../portfolio/components/sections/contact/contact.component';

@Component({
  selector: 'blog-blog',
  standalone: true,
  imports: [CommonModule, ProjectsComponent, ContactComponent, ProjectModalComponent],
  templateUrl: './blog.component.html',
  styles: ``
})
export class BlogComponent {

}
