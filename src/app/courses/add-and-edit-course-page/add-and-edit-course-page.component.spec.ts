import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditCoursePageComponent } from './add-and-edit-course-page.component';

describe('AddAndEditCoursePageComponent', () => {
  let component: AddAndEditCoursePageComponent;
  let fixture: ComponentFixture<AddAndEditCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAndEditCoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
