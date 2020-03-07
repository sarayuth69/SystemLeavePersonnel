import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumleaveComponent } from './sumleave.component';

describe('SumleaveComponent', () => {
  let component: SumleaveComponent;
  let fixture: ComponentFixture<SumleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
