import { createReducer, on } from '@ngrx/store';
import { CourseModel } from '../../shared/models/course.model';
import { deleteCourse, getCoursesData, setCoursesData } from '../actions/courses-list.actions';
import { logout } from '../actions/auth.actions';

export interface CourseListState {
    startItem: number,
    courseList: CourseModel[],
    lastPage: boolean
}

export const initialState: CourseListState = {
    startItem: 0,
    courseList: [],
    lastPage: false
};

const _courseListReducer = createReducer(initialState,
    on(getCoursesData, CourseListState => {
        console.log('getCoursesData');
        return CourseListState
    }),
    on(setCoursesData, (CourseListState, updatedValue) => {
        console.log(`setCoursesData`);
        if (updatedValue.courses)
            return {
                ...CourseListState,
                startItem: CourseListState.startItem + 3,
                courseList: CourseListState.courseList.concat(updatedValue.courses),
                lastPage: updatedValue.courses.length < 1
            }
    }),
    on(deleteCourse, (CourseListState, action) => {
        return {
            ...CourseListState,
            startItem: 0,
            courseList: CourseListState.courseList.filter(item => item.id !== action.id)
        }
    }),
    on(logout, CourseListState => {
        return {
            ...CourseListState,
            startItem: 0,
            courseList: []
        }
    })
);

export function courseListReducer(state = initialState, action): CourseListState {
    return _courseListReducer(state, action);
}
