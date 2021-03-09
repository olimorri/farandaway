import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBurgerComponent } from './header-burger.component';

describe('HeaderBurgerComponent', () => {
  let component: HeaderBurgerComponent;
  let fixture: ComponentFixture<HeaderBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
