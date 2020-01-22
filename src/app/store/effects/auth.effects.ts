import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../core/auth.service';
import { login, loginSuccess, setUserData, loginFail, logout, getUserData } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

    constructor(private actions: Actions,
                private authService: AuthService,
                private router: Router,
                private userStore: Store<{ auth }>) {
    }

    login = createEffect(() =>
        this.actions.pipe(
            ofType(login),
            exhaustMap(action =>
                this.authService.login(action).pipe(
                    map(token => loginSuccess(token)),
                    catchError(error => of(loginFail(error))
                    )
                )
            )
        )
    );

    loginSuccess = createEffect(() =>
            this.actions.pipe(
                ofType(loginSuccess),
                tap(resp => {
                    localStorage.setItem('token', resp.token);
                    console.log('log in successfully');
                    this.authService.getUserInfo()
                        .subscribe(user => this.userStore.dispatch(setUserData(user)));
                    this.router.navigate(['courses']);
                })
            )
        ,
        {dispatch: false}
    );

    loginFail = createEffect(() =>
            this.actions.pipe(
                ofType(loginFail),
                tap((error) => {
                    alert(`${error.error}.\n\nPlease use LOGIN: flastname,\nPASSWORD: flastname\n\nOR\n\nLOGIN: Morales,\nPASSWORD: id`)
                })
            )
        ,
        {dispatch: false}
    );

    logout = createEffect(() =>
            this.actions.pipe(
                ofType(logout),
                tap(() => {
                    localStorage.removeItem('token');
                    console.log('log out successfully');
                    this.router.navigate(['login']);
                })
            )
        ,
        {dispatch: false}
    );

    getUserData = createEffect(() =>
            this.actions.pipe(
                ofType(getUserData),
                tap(resp => {
                    this.authService.getUserInfo()
                        .subscribe(user => this.userStore.dispatch(setUserData(user)));
                })
            )
        ,
        {dispatch: false}
    );
}
