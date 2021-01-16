import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckleaveinfoAdminComponent } from './checkleaveinfo-admin.component';

describe('CheckleaveinfoAdminComponent', () => {
  let component: CheckleaveinfoAdminComponent;
  let fixture: ComponentFixture<CheckleaveinfoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckleaveinfoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckleaveinfoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
