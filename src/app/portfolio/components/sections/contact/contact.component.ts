import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastComponent } from '../../../../shared/components/toast/toast.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { ErrorToastComponent } from '../../../../shared/components/error-toast/error-toast.component';

@Component({
  selector: 'sections-contact',
  standalone: true,
  imports: [CommonModule, ToastComponent, ReactiveFormsModule, ErrorToastComponent],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {
  public email: string = 'rikelvicapellan15@gmail.com';
  public emailCopied: boolean = false;
  public showToast: boolean = false;
  public toastText: string = '';
  public wrongEmail: boolean = false;
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
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (emailRegex.test(this.formGroup.value.from_email.trim()) && this.formGroup.value.from_email.trim() !== 'rikelvicapellan15@gmail.com' && this.formGroup.value.from_email.trim() !== 'rikirilis15@gmail.com' && this.formGroup.value.from_email.trim() !== 'thewhitzip@gmail.com' && this.formGroup.value.from_email.trim() !== 'rrgnetflix@gmail.com') {
      if (this.formGroup.value.from_email.trim() === '' || this.formGroup.value.to_name.trim() === '' || this.formGroup.value.message.trim() === '') {
        this.wrongEmail = true;
        this.toastText = 'Fill all inputs!'
        navigator.clipboard.writeText(this.email);

        setTimeout(() => {
          this.wrongEmail = false;
          this.toastText = ''
        }, 3000);
      } else {
        emailjs.init({
          publicKey: 'sBTAHA5e6bTr3L4lD',
          blockHeadless: true,
          limitRate: {
            id: 'app',
            throttle: 120000,
          },
        });

        emailjs.send('service_q4ed9v6', 'template_yv5sx76', {
          from_name: this.formGroup.value.from_name.trim(),
          to_name: this.formGroup.value.to_name.trim(),
          from_email: this.formGroup.value.from_email.trim(),
          subject: this.formGroup.value.subject.trim(),
          message: this.formGroup.value.message.trim()
        });

        this.formGroup.reset({
          from_name: '',
          to_name: 'RikiRilis',
          from_email: '',
          subject: 'Email from contact form | RikiRilis',
          message: ''
        });
        this.showToast = true;
        this.toastText = 'Email sent!'
        setTimeout(() => {
          this.showToast = false;
          this.toastText = ''
        }, 3000);
      }
    } else {
      this.wrongEmail = true;
      this.toastText = 'Wrong email!'
      navigator.clipboard.writeText(this.email);

      setTimeout(() => {
        this.wrongEmail = false;
        this.toastText = ''
      }, 3000);
    }
  }
}
