import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-error-toast',
  standalone: true,
  imports: [],
  templateUrl: './error-toast.component.html',
  styles: ``
})
export class ErrorToastComponent {
  @Input() text: string = '';
}
