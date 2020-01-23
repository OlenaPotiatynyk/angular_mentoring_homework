import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { CoursesService } from '../../courses/courses.service';
import { getCoursesData, setCoursesData, deleteCourse } from '../actions/courses-list.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class CoursesListEffects {

    constructor(private actions: Actions,
                private coursesService: CoursesService,
                private courseListStore: Store<{ courseList }>) {
    }

    getCoursesData = createEffect(() =>
            this.actions.pipe(
                ofType(getCoursesData),
                tap(action => {
                    this.coursesService.getPage(action.startItem)
                        .subscribe(courses => this.courseListStore.dispatch(setCoursesData({courses})));
                })
            )
        ,
        {dispatch: false}
    );

    deleteCourse = createEffect(() =>
            this.actions.pipe(
                ofType(deleteCourse),
                tap(action => {
                    this.coursesService.removeItem(action.id)
                        .subscribe(() => console.log(`Course ${action.id} successfully deleted`));
                })
            )
        ,
        {dispatch: false}
    );

}
