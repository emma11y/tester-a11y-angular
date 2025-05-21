import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique5Component } from './cas-pratique-5.component';

describe('Cas pratique 5 : Est-ce que ces boutons sont accessibles ?', () => {
  let component: CasPratique5Component;
  let fixture: ComponentFixture<CasPratique5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CasPratique5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait avoir tous les boutons labellisés', () => {
    const buttons: NodeListOf<HTMLLabelElement> =
      fixture.nativeElement.querySelectorAll('button');

    buttons.forEach((label) => {
      let hasLabelled = false;

      if (label.getAttribute('title')) {
        hasLabelled = true;
      }

      if (label.getAttribute('aria-label')) {
        hasLabelled = true;
      }

      if (label.innerText) {
        hasLabelled = true;
      }

      expect(hasLabelled).toBeTrue();
    });
  });
});
