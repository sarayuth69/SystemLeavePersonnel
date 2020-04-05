import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdayworkComponent } from './editdaywork.component';

describe('EditdayworkComponent', () => {
  let component: EditdayworkComponent;
  let fixture: ComponentFixture<EditdayworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdayworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdayworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
