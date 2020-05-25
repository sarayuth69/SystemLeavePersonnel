import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelaeveprintComponent } from './filelaeveprint.component';

describe('FilelaeveprintComponent', () => {
  let component: FilelaeveprintComponent;
  let fixture: ComponentFixture<FilelaeveprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilelaeveprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilelaeveprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
