/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCarpoolComponent } from './edit-carpool.component';

describe('EditCarpoolComponent', () => {
  let component: EditCarpoolComponent;
  let fixture: ComponentFixture<EditCarpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCarpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
