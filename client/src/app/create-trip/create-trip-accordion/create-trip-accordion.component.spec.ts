import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripAccordionComponent } from './create-trip-accordion.component';

describe('CreateTripAccordionComponent', () => {
  let component: CreateTripAccordionComponent;
  let fixture: ComponentFixture<CreateTripAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
