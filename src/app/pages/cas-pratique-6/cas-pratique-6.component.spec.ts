import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique6Component } from './cas-pratique-6.component';

describe('Cas pratique 6 : Est-ce que ces liens sont accessibles ?', () => {
  let component: CasPratique6Component;
  let fixture: ComponentFixture<CasPratique6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CasPratique6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait avoir tous les liens correctement labellisés', () => {
    const links: NodeListOf<HTMLLabelElement> =
      fixture.nativeElement.querySelectorAll('a');

    const nonConformingWording = [
      'en savoir plus',
      'cliquer ici',
      'ici',
      'cliquez ici',
      'par ici',
      'par là',
      'regardez ici',
    ];

    links.forEach((link) => {
      if (nonConformingWording.includes(link.innerText.toLowerCase())) {
        let hasLabelled = false;

        if (link.getAttribute('title') || link.getAttribute('aria-label')) {
          hasLabelled = true;
        }

        if (link.querySelector('span.sr-only')) {
          hasLabelled = true;
        }

        expect(hasLabelled).toBeTrue();
        return;
      }

      expect(
        nonConformingWording.includes(link.innerText.toLowerCase())
      ).toBeFalse();
    });
  });
});
