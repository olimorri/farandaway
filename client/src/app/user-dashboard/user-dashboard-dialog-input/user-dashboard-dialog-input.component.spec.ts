import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardDialogInputComponent } from './user-dashboard-dialog-input.component';

describe('UserDashboardDialogInputComponent', () => {
  let component: UserDashboardDialogInputComponent;
  let fixture: ComponentFixture<UserDashboardDialogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardDialogInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardDialogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
