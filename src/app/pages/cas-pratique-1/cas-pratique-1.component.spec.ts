import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique1Component } from './cas-pratique-1.component';

describe('Cas pratique 1 : est-ce que les contrastes sont respectés sur ce site ?', () => {
  let component: CasPratique1Component;
  let fixture: ComponentFixture<CasPratique1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CasPratique1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Fonction utilitaire pour calculer la luminance relative
  function luminance(rgb: number[]) {
    return rgb.map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
  }

  // Fonction utilitaire pour calculer le ratio de contraste
  function contrast(rgb1: number[], rgb2: number[]) {
    const lum1 = luminance(rgb1);
    const lum2 = luminance(rgb2);
    const L1 = 0.2126 * lum1[0] + 0.7152 * lum1[1] + 0.0722 * lum1[2];
    const L2 = 0.2126 * lum2[0] + 0.7152 * lum2[1] + 0.0722 * lum2[2];
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  // Fonction pour convertir une couleur CSS rgb(a) en tableau [r, g, b]
  function parseRgb(str: string): number[] {
    const match = str.match(/rgba?\((\d+), (\d+), (\d+)/);
    if (!match) throw new Error('Format de couleur non reconnu');
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  }

  // Si les variables sont définies en format hexadécimal, il faut les convertir en RGB
  function hexToRgb(hex: string): number[] {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) throw new Error('Format hexadécimal non reconnu');
    return [
      parseInt(match[1], 16),
      parseInt(match[2], 16),
      parseInt(match[3], 16),
    ];
  }

  // Utilise la fonction parseRgb si la couleur est en rgb(), sinon hexToRgb
  function parseColor(str: string): number[] {
    if (str.startsWith('rgb')) {
      return parseRgb(str);
    } else if (str.startsWith('#')) {
      return hexToRgb(str);
    }
    throw new Error('Format de couleur non reconnu');
  }

  function getRatio(value1: string, value2: string) {
    const color = parseColor(value1);
    const background = parseColor(value2);

    return contrast(color, background);
  }

  it('devrait avoir un ratio de contraste texte/arrière-plan supérieur à 4.5 avec color et bg-color', () => {
    const element: HTMLElement = fixture.nativeElement;
    const style = getComputedStyle(element);

    const html: HTMLElement = document.documentElement;

    // Thème sombre
    html.setAttribute('data-selected-theme', 'dark');
    const ratioForDarkTheme = getRatio(
      style.getPropertyValue('--color').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForDarkTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA

    // Thème clair
    html.setAttribute('data-selected-theme', 'light');
    const ratioForLightTheme = getRatio(
      style.getPropertyValue('--color').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForLightTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA
  });

  it('devrait avoir un ratio de contraste texte/arrière-plan supérieur à 4.5 avec color-primary et bg-color', () => {
    const element: HTMLElement = fixture.nativeElement;
    const style = getComputedStyle(element);

    const html: HTMLElement = document.documentElement;

    // Thème sombre
    html.setAttribute('data-selected-theme', 'dark');
    const ratioForDarkTheme = getRatio(
      style.getPropertyValue('--color-primary').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForDarkTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA

    // Thème clair
    html.setAttribute('data-selected-theme', 'light');
    const ratioForLightTheme = getRatio(
      style.getPropertyValue('--color-primary').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForLightTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA
  });

  it('devrait avoir un ratio de contraste texte/arrière-plan supérieur à 4.5 avec color-secondary et bg-color', () => {
    const element: HTMLElement = fixture.nativeElement;
    const style = getComputedStyle(element);

    const html: HTMLElement = document.documentElement;

    // Thème sombre
    html.setAttribute('data-selected-theme', 'dark');
    const ratioForDarkTheme = getRatio(
      style.getPropertyValue('--color-secondary').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForDarkTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA

    // Thème clair
    html.setAttribute('data-selected-theme', 'light');
    const ratioForLightTheme = getRatio(
      style.getPropertyValue('--color-secondary').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForLightTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA
  });

  it('devrait avoir un ratio de contraste texte/arrière-plan supérieur à 4.5 avec color-red et bg-color', () => {
    const element: HTMLElement = fixture.nativeElement;
    const style = getComputedStyle(element);

    const html: HTMLElement = document.documentElement;

    // Thème sombre
    html.setAttribute('data-selected-theme', 'dark');
    const ratioForDarkTheme = getRatio(
      style.getPropertyValue('--color-red').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForDarkTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA

    // Thème clair
    html.setAttribute('data-selected-theme', 'light');
    const ratioForLightTheme = getRatio(
      style.getPropertyValue('--color-red').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForLightTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA
  });

  it('devrait avoir un ratio de contraste texte/arrière-plan supérieur à 4.5 avec color-green et bg-color', () => {
    const element: HTMLElement = fixture.nativeElement;
    const style = getComputedStyle(element);

    const html: HTMLElement = document.documentElement;

    // Thème sombre
    html.setAttribute('data-selected-theme', 'dark');
    const ratioForDarkTheme = getRatio(
      style.getPropertyValue('--color-green').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForDarkTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA

    // Thème clair
    html.setAttribute('data-selected-theme', 'light');
    const ratioForLightTheme = getRatio(
      style.getPropertyValue('--color-green').trim(),
      style.getPropertyValue('--bg-color').trim()
    );

    expect(ratioForLightTheme).toBeGreaterThan(4.5); // 4.5:1 est le minimum recommandé WCAG AA
  });
});
