import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastComponent } from '../../../shared/components/toast/toast.component';

@Component({
  selector: 'sections-contact',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {
  public email: string = 'rikelvicapellan15@gmail.com';
  public emailCopied: boolean = false;

  copyEmail(): void {
    this.emailCopied = true;
    navigator.clipboard.writeText(this.email);

    setTimeout(() => {
      this.emailCopied = false;
    }, 3000);
  }
}
