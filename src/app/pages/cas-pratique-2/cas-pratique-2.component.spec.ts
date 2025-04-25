import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasPratique2Component } from './cas-pratique-2.component';

describe('CasPratique2Component', () => {
  let component: CasPratique2Component;
  let fixture: ComponentFixture<CasPratique2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasPratique2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasPratique2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
