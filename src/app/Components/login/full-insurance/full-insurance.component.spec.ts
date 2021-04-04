import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInsuranceComponent } from './full-insurance.component';

describe('FullInsuranceComponent', () => {
  let component: FullInsuranceComponent;
  let fixture: ComponentFixture<FullInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
