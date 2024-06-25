import { Component } from '@angular/core';
import { AboutComponent } from '../../../../portfolio/components/sections/about/about.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../../../portfolio/components/sections/contact/contact.component';

@Component({
  selector: 'web-web',
  standalone: true,
  imports: [CommonModule, AboutComponent, RouterLink, ContactComponent],
  templateUrl: './web.component.html',
  styles: ``
})
export class WebComponent {

}
