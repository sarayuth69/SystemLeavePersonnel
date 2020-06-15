import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetowaitingComponent } from './leavetowaiting.component';

describe('LeavetowaitingComponent', () => {
  let component: LeavetowaitingComponent;
  let fixture: ComponentFixture<LeavetowaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavetowaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavetowaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
