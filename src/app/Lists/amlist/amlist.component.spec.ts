import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMlistComponent } from './amlist.component';

describe('AMlistComponent', () => {
  let component: AMlistComponent;
  let fixture: ComponentFixture<AMlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AMlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
