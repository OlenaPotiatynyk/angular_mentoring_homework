import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDateComponent } from './input-date.component';

describe('InputDateComponent', () => {
  let component: InputDateComponent;
  let fixture: ComponentFixture<InputDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDateComponent);
    component = fixture.componentInstance;

    component.creationDate = '2017-01-01';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
