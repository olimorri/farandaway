import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPollVotingComponent } from './trip-poll-voting.component';

describe('TripPollVotingComponent', () => {
  let component: TripPollVotingComponent;
  let fixture: ComponentFixture<TripPollVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPollVotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPollVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
