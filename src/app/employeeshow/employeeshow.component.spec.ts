import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeshowComponent } from './employeeshow.component';

describe('EmployeeshowComponent', () => {
  let component: EmployeeshowComponent;
  let fixture: ComponentFixture<EmployeeshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
