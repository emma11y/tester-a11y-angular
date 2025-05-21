import { Component, Input } from '@angular/core';
import { NgIf } from '@node_modules/@angular/common';
import { AbstractControl, NgModel } from '@node_modules/@angular/forms';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'validation-summary',
  imports: [NgIf],
  templateUrl: './validation-summary.component.html',
  styleUrl: './validation-summary.component.scss',
})
export class ValidationSummaryComponent {
  @Input() id!: string;
  @Input() control!: AbstractControl;
  @Input() fieldName!: string;

  invalid = signal(this.isInvalid);

  constructor() {
    effect(() => {
      const currentInvalid = this.invalid();

      if (this.control && (this.control as any).element) {
        const element: HTMLInputElement | HTMLTextAreaElement = (
          this.control as any
        ).element;

        if (!element || !element.parentElement) {
          return;
        }

        const classList = element.parentElement.classList;

        if (currentInvalid) {
          if (!classList.contains('invalid')) {
            classList.add('invalid');
          }

          classList.remove('valid');
        } else {
          if (!classList.contains('valid')) {
            classList.add('valid');
          }

          classList.remove('invalid');
        }
      }
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
