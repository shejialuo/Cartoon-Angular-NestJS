import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLogComponent } from './users-log.component';

describe('UsersLogComponent', () => {
  let component: UsersLogComponent;
  let fixture: ComponentFixture<UsersLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
