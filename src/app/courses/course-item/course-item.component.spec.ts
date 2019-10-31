import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { TimePipe } from '../../shared/time.pipe';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TimePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    spyOn(console, 'log');

    component.item = {
      id: '42',
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
      expect(console.log).toHaveBeenCalledWith('%cOnInit Test Name', 'color: red;');
    });
  });

  describe('ngOnChanges', () => {
    it('should write in console OnChanges', () => {
      component.ngOnChanges();
      expect(console.log).toHaveBeenCalledWith('%cOnChange Test Name', 'color: purple;');
    });
  });

  describe('editItem', () => {
    it('should write in console OnInit', () => {
      const button = fixture.debugElement.nativeElement.querySelector('#edit-item');
      button.click();
      expect(console.log).toHaveBeenCalledWith(
        '%cYou want to edit item with id "42", but right now it\'s not possible, wait a bit ...',
        'color: orange');
    });
  });
});
