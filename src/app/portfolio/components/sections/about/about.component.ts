import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sections-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styles: `
    #img-container {
      box-shadow: 0 0 15px rgba(8, 145, 178, 1);
    }
  `
})
export class AboutComponent {
  public picUrl = 'https://ynbjmptmmmbaspzfxzdu.supabase.co/storage/v1/object/sign/portfolio/src/main-pic.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vc3JjL21haW4tcGljLndlYnAiLCJpYXQiOjE3MTk1MTkxNDIsImV4cCI6MzI5NjMxOTE0Mn0.AfuzV2joKThAdRYAjwaKGsWWyiBu4i1VEjtkazr3RKY&t=2024-06-27T20%3A12%3A28.502Z';
  
  cvRedirect(): void {
    const url: string = 'https://ynbjmptmmmbaspzfxzdu.supabase.co/storage/v1/object/sign/portfolio/docs/Rikelvi_Capell_n_CV.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vZG9jcy9SaWtlbHZpX0NhcGVsbF9uX0NWLnBkZiIsImlhdCI6MTcxOTUxNDY2OCwiZXhwIjozMjk2MzE0NjY4fQ.966pqCV2sq2vyNllIrv6RVHiAUtagPdmmNqXuYh8U1M&t=2024-06-27T18%3A57%3A53.059Z';

    window.open(url, '_blank', 'rel=noopener');
  }
}
