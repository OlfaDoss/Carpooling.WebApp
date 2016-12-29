/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddCarpoolComponent } from './add-carpool.component';

describe('AddCarpoolComponent', () => {
  let component: AddCarpoolComponent;
  let fixture: ComponentFixture<AddCarpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
