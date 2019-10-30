import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { TimePipe } from '../../shared/time.pipe';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesPageComponent, CourseItemComponent, TimePipe],
      imports: [FormsModule]
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
  });
});
