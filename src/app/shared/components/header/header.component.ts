import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styles: `
    #check {
      display: none;
    }

    .menu {
      width: 2em;
    }

    #check:checked~.menu__span-1 {
      transform-origin: bottom;
      width: 100%;
      transform: rotate3d(0, 0, 1, -45deg) translate3d(8px, -6px, 0);
    }

    #check:checked~.menu__span-2 {
      transform-origin: top;
      transform: rotate3d(0, 0, 1, 45deg);
    }

    #check:checked~.menu__span-3 {
      transform-origin: bottom;
      transform: rotate3d(0, 0, 1, -45deg) translate3d(4px, -19px, 0);
      opacity: 0;
    }

    .menu span {
      margin: auto 0;
      height: .19em;
      border-radius: 20px;
      margin: 3px 0;
      transition: .2s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    .menu__span-1 {
      width: 50%;
      will-change: transform;
    }

    .menu__span-2 {
      width: 100%;
      will-change: transform;
    }

    .menu__span-3 {
    width: 75%;
    will-change: transform;
}
  `
})
export class HeaderComponent {
  public mobileMenuShown: boolean = false;
  public currentUrl: string = '';
  public title?: string;

  constructor(
    private router: Router,
    @Inject(DOCUMENT)
    private document: Document,
    protected renderer: Renderer2) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url.replace('/', ' ').split('#')[0];
        if (this.currentUrl === ' ') { this.title = 'Web'; return; };
        if (this.currentUrl.includes('/')) {
          this.title = `${this.currentUrl.split('/')[1]} - ${this.currentUrl.split('/')[2].replace('-', ' ')}`;
        } else {
          this.title = this.currentUrl;
        }
      }
    });
  }

  menuCheckChange(): void {
    this.mobileMenuShown = !this.mobileMenuShown;
    this.mobileMenuShown === true ? this.renderer.setStyle(this.document.body, 'overflow', 'hidden') : this.renderer.removeStyle(this.document.body, 'overflow');
  }
}
