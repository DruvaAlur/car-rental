import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouCardComponent } from './thank-you-card.component';

describe('ThankYouCardComponent', () => {
  let component: ThankYouCardComponent;
  let fixture: ComponentFixture<ThankYouCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThankYouCardComponent]
    });
    fixture = TestBed.createComponent(ThankYouCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
