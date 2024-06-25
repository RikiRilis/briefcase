import { Component } from '@angular/core';
import { AboutComponent } from '../sections/about/about.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'portfolio-portfolio',
  standalone: true,
  imports: [CommonModule, AboutComponent, ProjectsComponent, ContactComponent],
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent {

}
