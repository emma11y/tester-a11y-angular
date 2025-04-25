import { Directive, HostBinding, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[routerLinkActive]',
})
export class RouterLinkActiveDirective {
  @Input('routerLinkActive') linkUrl!: string; // URL du lien

  private readonly router: Router = inject(Router);

  @HostBinding('attr.aria-current') get ariaCurrent() {
    return this.router.url === this.linkUrl ? 'true' : undefined;
  }

  @HostBinding('class') get class() {
    return this.router.url === this.linkUrl ? 'active' : undefined;
  }
}
