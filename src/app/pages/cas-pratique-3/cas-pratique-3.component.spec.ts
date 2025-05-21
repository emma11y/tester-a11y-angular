import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique3Component } from './cas-pratique-3.component';

describe("Cas pratique 3 : Est-ce que ces images sont vocalisables par le lecteur d'écran ?", () => {
  let component: CasPratique3Component;
  let fixture: ComponentFixture<CasPratique3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CasPratique3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait avoir tous les images avec un attribut alt', () => {
    const imgs: NodeListOf<HTMLLabelElement> =
      fixture.nativeElement.querySelectorAll('img');

    imgs.forEach((img) => {
      expect(img.hasAttribute('alt')).toBeTrue();
    });
  });

  it('ne devrait pas avoir le nom du fichier dans les alt', () => {
    const imgs: NodeListOf<HTMLLabelElement> =
      fixture.nativeElement.querySelectorAll('img');

    imgs.forEach((img) => {
      const alt = img.getAttribute('alt');

      expect(alt).not.toContain('.png');
      expect(alt).not.toContain('.jpg');
    });
  });
});
