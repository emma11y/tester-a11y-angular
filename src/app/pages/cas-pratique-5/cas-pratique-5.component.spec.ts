import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique5Component } from './cas-pratique-5.component';

describe('CasPratique5Component', () => {
  let component: CasPratique5Component;
  let fixture: ComponentFixture<CasPratique5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasPratique5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
