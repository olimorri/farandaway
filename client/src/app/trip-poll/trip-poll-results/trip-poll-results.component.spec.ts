import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPollResultsComponent } from './trip-poll-results.component';

describe('TripPollResultsComponent', () => {
  let component: TripPollResultsComponent;
  let fixture: ComponentFixture<TripPollResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPollResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPollResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
