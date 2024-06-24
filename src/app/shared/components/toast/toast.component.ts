import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styles: ``
})
export class ToastComponent {
  @Input() text: string = '';
}
