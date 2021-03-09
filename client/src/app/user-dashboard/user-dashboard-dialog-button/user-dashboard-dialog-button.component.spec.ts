import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardDialogButtonComponent } from './user-dashboard-dialog-button.component';

describe('UserDashboardDialogButtonComponent', () => {
  let component: UserDashboardDialogButtonComponent;
  let fixture: ComponentFixture<UserDashboardDialogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardDialogButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardDialogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
