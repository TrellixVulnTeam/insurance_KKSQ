import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdincuranceComponent } from './thirdincurance.component';

describe('ThirdincuranceComponent', () => {
  let component: ThirdincuranceComponent;
  let fixture: ComponentFixture<ThirdincuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdincuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdincuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
