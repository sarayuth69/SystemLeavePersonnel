import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckleaveinfoComponent } from './checkleaveinfo.component';

describe('CheckleaveinfoComponent', () => {
  let component: CheckleaveinfoComponent;
  let fixture: ComponentFixture<CheckleaveinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckleaveinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckleaveinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
