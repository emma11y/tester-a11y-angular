import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique4Component } from './cas-pratique-4.component';

describe('CasPratique4Component', () => {
  let component: CasPratique4Component;
  let fixture: ComponentFixture<CasPratique4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasPratique4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
