import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestleaveComponent } from './testleave.component';

describe('TestleaveComponent', () => {
  let component: TestleaveComponent;
  let fixture: ComponentFixture<TestleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
