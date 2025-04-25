import { RouterLinkComponent } from './../router-link/router-link.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
