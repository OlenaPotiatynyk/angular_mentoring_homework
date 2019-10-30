import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    spy = spyOn(console, 'log').and.callThrough();

    component.item = {
      id: 42,
      title: 'Test Name',
      creationDate: '9 Nov, 2018',
      duration: 88,
      description: 'Learn about where you can find course descriptions'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should write in console OnInit', () => {
      expect(spy).toHaveBeenCalledWith('%cOnInit Test Name', 'color: red;');
    });
  });

  describe('ngOnChanges', () => {
    it('should write in console OnChanges', () => {
      spy.calls.reset();
      component.ngOnChanges();
      expect(spy).toHaveBeenCalledWith('%cOnChange Test Name', 'color: purple;');
    });
  });

  describe('editItem', () => {
    it('should write in console OnInit', () => {
      spy.calls.reset();
      const button = fixture.debugElement.nativeElement.querySelector('#edit-item');
      button.click();
      expect(spy).toHaveBeenCalledWith(
        '%cYou want to edit item with id "42", but right now it\'s not possible, wait a bit ...',
        'color: orange');
    });
  });
});
