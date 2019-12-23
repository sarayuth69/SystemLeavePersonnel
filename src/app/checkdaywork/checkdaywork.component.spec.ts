import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdayworkComponent } from './checkdaywork.component';

describe('CheckdayworkComponent', () => {
  let component: CheckdayworkComponent;
  let fixture: ComponentFixture<CheckdayworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckdayworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdayworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
