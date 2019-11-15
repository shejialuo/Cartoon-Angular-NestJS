import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavrbarDisplayComponent } from './navrbar-display.component';

describe('NavrbarDisplayComponent', () => {
  let component: NavrbarDisplayComponent;
  let fixture: ComponentFixture<NavrbarDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavrbarDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavrbarDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
