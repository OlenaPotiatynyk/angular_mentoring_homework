import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { authReducer } from './auth.reducer';
import { courseListReducer } from './course-list.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  courseList: courseListReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
