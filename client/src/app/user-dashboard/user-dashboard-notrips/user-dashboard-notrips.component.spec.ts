import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardNotripsComponent } from './user-dashboard-notrips.component';

describe('UserDashboardNotripsComponent', () => {
  let component: UserDashboardNotripsComponent;
  let fixture: ComponentFixture<UserDashboardNotripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardNotripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardNotripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
