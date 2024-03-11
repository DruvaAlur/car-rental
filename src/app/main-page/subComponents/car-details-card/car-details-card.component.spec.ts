import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsCardComponent } from './car-details-card.component';

describe('CarDetailsCardComponent', () => {
  let component: CarDetailsCardComponent;
  let fixture: ComponentFixture<CarDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarDetailsCardComponent]
    });
    fixture = TestBed.createComponent(CarDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
