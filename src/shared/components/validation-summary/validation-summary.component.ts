import { Component, Input } from '@angular/core';
import { NgIf } from '@node_modules/@angular/common';
import { NgModel } from '@node_modules/@angular/forms';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'validation-summary',
  imports: [NgIf],
  templateUrl: './validation-summary.component.html',
  styleUrl: './validation-summary.component.scss',
})
export class ValidationSummaryComponent {
  @Input() id!: string;
  @Input() control!: NgModel;
  @Input() fieldName!: string;

  invalid = signal(this.isInvalid);

  constructor() {
    effect(() => {
      const currentInvalid = this.invalid();
      // Ajoutez ici le code à exécuter lorsque 'invalid' change
      console.log('invalid changed:', currentInvalid);
    });
  }

  // Synchronise le signal à chaque cycle de détection
  ngDoCheck(): void {
    this.invalid.set(this.isInvalid);
  }

  get isInvalid() {
    return (
      this.control &&
      this.control.invalid &&
      (this.control.dirty || this.control.touched)
    );
  }
}
