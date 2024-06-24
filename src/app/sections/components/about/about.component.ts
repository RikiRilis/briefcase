import { Component } from '@angular/core';

@Component({
  selector: 'sections-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styles: `
    #img-container {
      box-shadow: 0 0 15px rgba(8, 145, 178, 1);
    }
  `
})
export class AboutComponent {

}
