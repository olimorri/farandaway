import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardNouserComponent } from './user-dashboard-nouser.component';

describe('UserDashboardNouserComponent', () => {
  let component: UserDashboardNouserComponent;
  let fixture: ComponentFixture<UserDashboardNouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardNouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardNouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
