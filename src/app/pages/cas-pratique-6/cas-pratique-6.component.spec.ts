import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique6Component } from './cas-pratique-6.component';

describe('CasPratique6Component', () => {
  let component: CasPratique6Component;
  let fixture: ComponentFixture<CasPratique6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasPratique6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
