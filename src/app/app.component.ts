import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DOCUMENT, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './app.component.html',
  styles: ``
})
export class AppComponent implements OnInit {
  public scrolled: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.document.addEventListener('scroll', () => {
      window.scrollY > 200 ? this.scrolled = true : this.scrolled = false;
    });
  }
}
