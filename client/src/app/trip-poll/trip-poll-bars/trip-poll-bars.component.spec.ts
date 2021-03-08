import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPollBarsComponent } from './trip-poll-bars.component';

describe('TripPollBarsComponent', () => {
  let component: TripPollBarsComponent;
  let fixture: ComponentFixture<TripPollBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPollBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPollBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
