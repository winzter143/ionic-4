import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPagePage } from './toolbar-page.page';

describe('ToolbarPagePage', () => {
  let component: ToolbarPagePage;
  let fixture: ComponentFixture<ToolbarPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
