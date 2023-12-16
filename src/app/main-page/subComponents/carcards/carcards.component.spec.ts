import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcardsComponent } from './carcards.component';

describe('CarcardsComponent', () => {
  let component: CarcardsComponent;
  let fixture: ComponentFixture<CarcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarcardsComponent]
    });
    fixture = TestBed.createComponent(CarcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
