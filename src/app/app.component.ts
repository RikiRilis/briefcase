import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { LoadingPageComponent } from './shared/pages/loading-page/loading-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, RouterLink, ScrollTopComponent, LoadingPageComponent],
  templateUrl: './app.component.html',
  styles: ``
})
export class AppComponent { }
