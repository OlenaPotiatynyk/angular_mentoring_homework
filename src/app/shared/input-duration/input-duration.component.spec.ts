import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDurationComponent } from './input-duration.component';
import { TimePipe } from '../pipes/time.pipe';

describe('InputDurationComponent', () => {
  let component: InputDurationComponent;
  let fixture: ComponentFixture<InputDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDurationComponent, TimePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
