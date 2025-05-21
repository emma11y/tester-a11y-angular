import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[controlElement]',
})
export class ControlElementDirective {
  constructor(private el: ElementRef) {}

  @Input('controlElement')
  set control(control: any) {
    if (control) {
      control.element = this.el.nativeElement;
    }
  }
}
