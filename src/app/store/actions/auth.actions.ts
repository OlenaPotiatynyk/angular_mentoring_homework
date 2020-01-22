import { createAction, props } from '@ngrx/store';

import { UserInterface } from '../../shared/interfaces/user.interface';

export const login = createAction(
    '[Auth] Login',
    props<UserInterface>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ token: string }>()
);

export const getUserData = createAction(
    '[Auth] Get User Data'
);

export const setUserData = createAction(
    '[Auth] Set User Data',
    props<UserInterface>()
);

export const loginFail = createAction(
    '[Auth] Login Fail',
    props<{ error: any }>()
);

export const logout = createAction(
    '[Auth] Logout'
);
