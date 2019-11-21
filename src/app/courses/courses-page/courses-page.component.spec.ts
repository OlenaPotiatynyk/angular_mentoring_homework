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
    it('should filter courses by search value in title', () => {
      // TODO: add search test
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
    it('should ask confirmation before deleting', () => {
      spyOn(window, 'confirm');
      component.onDeleteItem(1);

      expect(window.confirm).toHaveBeenCalled();
    });

    describe('when user confirmed', () => {
      beforeEach(() => {
        spyOn(window, 'confirm').and.returnValue(true);
      });

      it('should call coursesService removeItem with selected id', () => {
        // TODO: add test
      });

      it('should update courses list', () => {
        // TODO: add test
      });
    });

    describe('when user did NOT confirm', () => {
      beforeEach(() => {
        spyOn(window, 'confirm').and.returnValue(false);
      });

      it('should not call coursesService removeItem', () => {
        // TODO: add test
      });
    });

  });
});
