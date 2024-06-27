import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-404-page',
  standalone: true,
  imports: [],
  templateUrl: './error-404-page.component.html'
})
export class Error404PageComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
