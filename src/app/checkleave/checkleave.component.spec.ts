import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckleaveComponent } from './checkleave.component';

describe('CheckleaveComponent', () => {
  let component: CheckleaveComponent;
  let fixture: ComponentFixture<CheckleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
