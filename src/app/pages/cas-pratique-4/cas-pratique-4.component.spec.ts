import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique4Component } from './cas-pratique-4.component';

describe('Cas pratique 4 : est-ce que ce formulaire est accessible ?', () => {
  let component: CasPratique4Component;
  let fixture: ComponentFixture<CasPratique4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CasPratique4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait avoir tous les labels avec un attribut for', () => {
    const labels: NodeListOf<HTMLLabelElement> =
      fixture.nativeElement.querySelectorAll('label');

    labels.forEach((label) => {
      expect(label.hasAttribute('for')).toBeTrue();
    });
  });
});
