import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripInitialInfoComponent } from './create-trip-initial-info.component';

describe('CreateTripInitialInfoComponent', () => {
  let component: CreateTripInitialInfoComponent;
  let fixture: ComponentFixture<CreateTripInitialInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripInitialInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripInitialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
