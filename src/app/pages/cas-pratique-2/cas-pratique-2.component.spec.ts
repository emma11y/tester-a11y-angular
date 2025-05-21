import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique2Component } from './cas-pratique-2.component';
import { DOCUMENT } from '@angular/common';

describe('Cas pratique 2 : est-ce que ce site est vocalisable dans la bonne langue ?', () => {
  let component: CasPratique2Component;
  let fixture: ComponentFixture<CasPratique2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CasPratique2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait avoir la bonne langue', () => {
    // Dans l'environnement de test Angular, le fichier index.html n'est pas utilisé tel quel.
    // Le DOM utilisé par Jasmine/Karma est généré dynamiquement et ne reprend pas les attributs de index.html.
    // Par conséquent, l'attribut lang n'est pas présent sur <html> dans ce contexte de test.
    const html: HTMLElement = document.documentElement;
    console.log(html, document);
    expect(html).not.toBeNull();
    expect(html.hasAttribute('lang')).toBeTrue();
    expect(html.getAttribute('lang')).not.toBeNull();
    expect(html.getAttribute('lang')).toEqual('fr');
  });
});
