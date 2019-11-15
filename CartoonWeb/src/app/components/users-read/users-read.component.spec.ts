import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersReadComponent } from './users-read.component';

describe('UsersReadComponent', () => {
  let component: UsersReadComponent;
  let fixture: ComponentFixture<UsersReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
