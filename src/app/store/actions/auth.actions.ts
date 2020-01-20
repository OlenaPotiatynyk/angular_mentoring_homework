import { createAction, props } from '@ngrx/store';

import { UserInterface } from '../../shared/interfaces/user.interface';

export const init = createAction(
    '[Auth] Init'
);

export const login = createAction(
    '[Auth] Login',
    props<UserInterface>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ token: string }>()
);

export const loginFail = createAction(
    '[Auth] Login Fail',
    props<{ error: any }>()
);

export const logout = createAction(
    '[Auth] Logout'
);
