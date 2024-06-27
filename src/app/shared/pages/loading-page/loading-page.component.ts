import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'shared-loading-page',
  standalone: true,
  imports: [],
  templateUrl: './loading-page.component.html'
})
export class LoadingPageComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.classList.add('overflow-hidden');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('overflow-hidden');
  }
}
