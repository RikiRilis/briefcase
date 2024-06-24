import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutComponent } from './sections/components/about/about.component';
import { ContactComponent } from './sections/components/contact/contact.component';
import { ProjectsComponent } from './sections/components/projects/projects.component';
import { DOCUMENT, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, AboutComponent, ContactComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public scrolled: boolean = false;

  constructor(@Inject(DOCUMENT) private window: Document) { }

  ngOnInit(): void {
    this.window.addEventListener('scroll', () => {
      window.scrollY > 200 ? this.scrolled = true : this.scrolled = false;
    });
  }
}
