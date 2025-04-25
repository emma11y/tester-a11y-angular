import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique1Component } from './cas-pratique-1.component';

describe('CasPratique1Component', () => {
  let component: CasPratique1Component;
  let fixture: ComponentFixture<CasPratique1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasPratique1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
