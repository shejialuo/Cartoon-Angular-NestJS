import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRemarkComponent } from './users-remark.component';

describe('UsersRemarkComponent', () => {
  let component: UsersRemarkComponent;
  let fixture: ComponentFixture<UsersRemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersRemarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
