import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'shared-scroll-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top.component.html',
  styles: ``
})
export class ScrollTopComponent implements OnInit {
  public scrolled: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.document.addEventListener('scroll', () => {
      window.scrollY > 200 ? this.scrolled = true : this.scrolled = false;
    });
  }
}
