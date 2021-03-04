import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPollComponent } from './trip-poll.component';

describe('TripPollComponent', () => {
  let component: TripPollComponent;
  let fixture: ComponentFixture<TripPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
