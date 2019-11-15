import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRegisterComponent } from './users-register.component';

describe('UsersRegisterComponent', () => {
  let component: UsersRegisterComponent;
  let fixture: ComponentFixture<UsersRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
