import { FormGroup, AbstractControl } from '@angular/forms';

export function markControlAsTouched(control: AbstractControl): void {
  control.markAsTouched();
  control.updateValueAndValidity();
}

export function markControlAsTouchedOnForm(form: FormGroup): void {
  for (const control of Object.values(form.controls)) {
    control.markAsTouched();
    control.updateValueAndValidity();
  }
}
