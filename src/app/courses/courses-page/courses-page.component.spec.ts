import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { TimePipe } from '../../shared/pipes/time.pipe';
import { OrderByPipe } from '../../shared/pipes/order-by.pipe';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { AddTheBorderDirective } from '../add-the-border.directive';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        CourseItemComponent,
        TimePipe,
        OrderByPipe,
        FilterPipe,
        AddTheBorderDirective
      ],
      imports: [FormsModule],
      providers: [FilterPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    spyOn(console, 'log').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('search', () => {
    it('should write input value in console on click', () => {
      const button = fixture.debugElement.nativeElement.querySelector('.search__button');
      component.value = 'Some test value';
      button.click();

      expect(console.log).toHaveBeenCalledWith('%cSome test value', 'color: crimson;');
    });

    it('should write input value in console on Enter', () => {
      const input = fixture.debugElement.nativeElement.querySelector('.search__input-field');
      const event: Event = new KeyboardEvent('keyup', {key: 'Enter'});
      component.value = 'Test value';
      input.dispatchEvent(event);

      expect(console.log).toHaveBeenCalledWith('%cTest value', 'color: crimson;');
    });
  });

  describe('loadMoreHandler', () => {
    it('should write in console on click', () => {
      const button = fixture.debugElement.nativeElement.querySelector('.link');
      button.click();

      expect(console.log).toHaveBeenCalledWith('%cYou just clicked LOAD MORE button. Well done!', 'color: chocolate;');
    });
  });

  describe('onDeleteItem', () => {
    it('should write in console on element delete', () => {
      component.onDeleteItem(42);
      expect(console.log).toHaveBeenCalledWith('%cYou just deleted item with id: 42', 'color: green;');
    });

    it('should delete selected element from array', () => {
      component.courses = [
        {
          id: '42',
          title: 'Test Name',
          creationDate: new Date('November 1, 2019 03:24:00').getTime(),
          duration: 88,
          topRated: true,
          description: 'Learn about where you can find course descriptions'
        },
        {
          id: '43',
          title: 'Test Name',
          creationDate: new Date('October 10, 2019 03:24:00').getTime(),
          duration: 88,
          topRated: false,
          description: 'Learn about where you can find course descriptions'
        }
      ];
      component.onDeleteItem('42');
      expect(component.courses).toEqual([{
        id: '43',
        title: 'Test Name',
        creationDate: new Date('October 10, 2019 03:24:00').getTime(),
        duration: 88,
        topRated: false,
        description: 'Learn about where you can find course descriptions'
      }]);
    });
  });
});
