import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { TimePipe } from '../../shared/pipes/time.pipe';

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

    component.item = {
      id: 42,
      title: 'Test Name',
      creationDate: Date.now(),
      duration: 88,
      topRated: false,
      description: 'Learn about where you can find course descriptions'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('edit', () => {
    it('should emit function', () => {
      spyOn(component.editItem, 'emit');
      const button = fixture.debugElement.nativeElement.querySelector('#edit-item');
      button.click();
      expect(component.editItem.emit).toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should write in console OnInit', () => {
      spyOn(component.deleteItem, 'emit');
      const button = fixture.debugElement.nativeElement.querySelector('#delete-item');
      button.click();
      expect(component.deleteItem.emit).toHaveBeenCalled();
    });
  });
});
