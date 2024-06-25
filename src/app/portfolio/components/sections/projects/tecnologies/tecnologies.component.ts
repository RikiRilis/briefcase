import { Component } from '@angular/core';

@Component({
  selector: 'projects-tecnologies',
  standalone: true,
  imports: [],
  templateUrl: './tecnologies.component.html',
  styles: ``
})
export class TecnologiesComponent {
  public currentTecnology: string = '';

  onMouseEnterTecnology(tecnology: string): void {
    this.currentTecnology = tecnology;
  }

  onMouseLeaveTecnology(): void {
    this.currentTecnology = '';
  }
}
