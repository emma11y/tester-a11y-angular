import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ValidationSummaryComponent } from '../validation-summary/validation-summary.component';
import { NgClass } from '@node_modules/@angular/common';

@Component({
  selector: 'app-control-input',
  imports: [FormsModule, ValidationSummaryComponent, NgClass],
  templateUrl: './control-input.component.html',
  styleUrl: './control-input.component.scss',
  providers: [
    {
      useExisting: forwardRef(() => ControlInputComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
})
export class ControlInputComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() control!: AbstractControl;

  //#region fields from NG_VALUE_ACCESSOR
  public onChanged = (_: string) => {};
  public onTouched = () => {};
  //#endregion

  //#region methods from NG_VALUE_ACCESSOR
  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChanged(newValue);
    this.onTouched();
  }

  //#endregion
}
