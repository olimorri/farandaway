import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardTripComponent } from './user-dashboard-trip.component';

describe('UserDashboardTripComponent', () => {
  let component: UserDashboardTripComponent;
  let fixture: ComponentFixture<UserDashboardTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
