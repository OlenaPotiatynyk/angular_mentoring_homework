import { createAction, props } from '@ngrx/store';
import { CourseModel } from '../../shared/models/course.model';

export const getCoursesData = createAction(
    '[Courses] Get Courses',
    props<{ startItem: number }>()
);

export const setCoursesData = createAction(
    '[Courses] Set Courses Data',
    props<{ courses: CourseModel[] }>()
);

export const deleteCourse = createAction(
    '[Courses] Delete Course',
    props<{ id: number }>()
);
