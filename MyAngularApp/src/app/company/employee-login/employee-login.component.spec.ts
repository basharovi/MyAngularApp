import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoginComponent } from './employee-login.component';

describe('EmployeeLoginComponent', () => {
  let component: EmployeeLoginComponent;
  let fixture: ComponentFixture<EmployeeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
