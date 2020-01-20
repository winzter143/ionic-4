import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Page1Page } from './tab2-page1.page';

describe('Tab2Page1Page', () => {
  let component: Tab2Page1Page;
  let fixture: ComponentFixture<Tab2Page1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2Page1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2Page1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
