import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastComponent } from '../../../../shared/components/toast/toast.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { from } from 'rxjs';

@Component({
  selector: 'sections-contact',
  standalone: true,
  imports: [CommonModule, ToastComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {
  public email: string = 'rikelvicapellan15@gmail.com';
  public emailCopied: boolean = false;
  public showToast: boolean = false;
  public toastText: string = '';
  public formGroup: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'RikiRilis',
    from_email: '',
    subject: 'Email from contact form | RikiRilis',
    message: ''
  });

  constructor(private fb: FormBuilder) { }

  copyEmail(): void {
    this.emailCopied = true;
    this.showToast = true;
    this.toastText = 'Email Copied!'
    navigator.clipboard.writeText(this.email);

    setTimeout(() => {
      this.emailCopied = false;
      this.showToast = false;
      this.toastText = ''
    }, 3000);
  }

  sendMail(): void {
    if (this.formGroup.value.from_email === '' || this.formGroup.value.to_name === '' || this.formGroup.value.from_email === '') return;

    emailjs.init({
      publicKey: 'sBTAHA5e6bTr3L4lD',
      blockHeadless: true,
      limitRate: {
        id: 'app',
        throttle: 120000,
      },
    });

    emailjs.send('service_q4ed9v6', 'template_yv5sx76', {
      from_name: this.formGroup.value.from_name,
      to_name: this.formGroup.value.to_name,
      from_email: this.formGroup.value.from_email,
      subject: this.formGroup.value.subject,
      message: this.formGroup.value.message
    });

    this.formGroup.reset({
      from_name: '',
      to_name: 'RikiRilis',
      from_email: '',
      subject: 'Email from contact form | RikiRilis',
      message: ''
    });
    this.showToast = true;
    this.toastText = 'Email Sent!'
    setTimeout(() => {
      this.showToast = false;
      this.toastText = ''
    }, 3000);
  }
}
