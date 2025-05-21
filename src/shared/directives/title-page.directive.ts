import { DOCUMENT } from '@angular/common';
import { Directive, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[titlePage]',
})
export class TitlePageDirective {
  constructor(
    protected _router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    _router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // for accessibility - https://access42.net/accessibilite-rechargement-page-single-page-applications
        const titlePageElement: HTMLElement | null =
          this.document.getElementById('title-page');
        if (titlePageElement) {
          titlePageElement.innerHTML = this.document.title;
        }
      }
    });
  }
}
