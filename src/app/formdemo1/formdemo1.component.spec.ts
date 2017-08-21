import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdemo1Component } from './formdemo1.component';

describe('Formdemo1Component', () => {
  let component: Formdemo1Component;
  let fixture: ComponentFixture<Formdemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formdemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
