import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripOverviewComponent } from './create-trip-overview.component';

describe('CreateTripOverviewComponent', () => {
  let component: CreateTripOverviewComponent;
  let fixture: ComponentFixture<CreateTripOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
