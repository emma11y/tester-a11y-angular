import { Component, Input } from '@angular/core';
import { RouterLinkActiveDirective } from '../../directives/router-link-active.directive';

@Component({
  selector: 'router-link',
  imports: [RouterLinkActiveDirective],
  template: `<a [href]="href" routerLinkActive="{{ href }}">{{ title }}</a>`,
})
export class RouterLinkComponent {
  @Input() href!: string;
  @Input() title!: string;
}
