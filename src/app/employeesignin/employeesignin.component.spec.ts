import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesigninComponent } from './employeesignin.component';

describe('EmployeesigninComponent', () => {
  let component: EmployeesigninComponent;
  let fixture: ComponentFixture<EmployeesigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
