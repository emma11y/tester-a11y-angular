import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cas-pratique-3',
  imports: [NgClass],
  templateUrl: './cas-pratique-3.component.html',
  styleUrl: './cas-pratique-3.component.scss',
})
export class CasPratique3Component {
  public hasHidden: boolean = true;
}
