import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripOptionComponent } from './create-trip-option.component';

describe('CreateTripOptionComponent', () => {
  let component: CreateTripOptionComponent;
  let fixture: ComponentFixture<CreateTripOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
