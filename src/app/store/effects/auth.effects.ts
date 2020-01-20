import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../core/auth.service';
import { login, loginSuccess, loginFail, logout } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router
    ) {
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
                    this.authService.getUserInfo().subscribe(user => this.authService.authorizedUser.next(user));
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
}
