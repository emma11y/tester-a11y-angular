import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInputComponent } from './control-input.component';

describe('ControlInputComponent', () => {
  let component: ControlInputComponent;
  let fixture: ComponentFixture<ControlInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait avoir un label avec un attribut for', () => {
    const label: HTMLLabelElement | null =
      fixture.nativeElement.querySelector('label');
    expect(label).not.toBeNull();
    expect(label?.hasAttribute('for')).toBeTrue();
  });
});
