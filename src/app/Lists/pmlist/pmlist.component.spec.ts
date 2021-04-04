import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMlistComponent } from './pmlist.component';

describe('PMlistComponent', () => {
  let component: PMlistComponent;
  let fixture: ComponentFixture<PMlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
