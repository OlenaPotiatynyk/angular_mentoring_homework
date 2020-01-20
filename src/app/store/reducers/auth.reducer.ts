import { createReducer, on } from '@ngrx/store';

import { init, login, logout } from '../actions/auth.actions';
import { UserModel } from '../../shared/models/user.model';

export interface AuthState {
    isAuthenticated: boolean;
    user: UserModel | null;
}

export const initialState: AuthState = {
    isAuthenticated: !!localStorage.getItem('token'),
    user: null
};

const _authReducer = createReducer(initialState,
    on(init, AuthState => {
        console.log('init');
        return AuthState
    }),
    on(login, AuthState => {
        console.log('login');
        return {...AuthState, isAuthenticated: true}
    }),
    on(logout, AuthState => {
        console.log('logout');
        return {...AuthState, isAuthenticated: false}
    })
);

export function authReducer(state = initialState, action): AuthState {
    return _authReducer(state, action);
}
