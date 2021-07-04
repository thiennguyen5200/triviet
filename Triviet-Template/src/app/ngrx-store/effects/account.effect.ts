import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { AddAccountAction, AccountActionTypes, AddAccountSuccessAction, AddAccountFailureAction, DeleteAccountAction, DeleteAccountSuccessAction, DeleteAccountFailureAction } from '../actions/account.action';
import { ServerResponse } from '../models/types.model';
import { Router } from '@angular/router';
import { JWTService } from '../../services/JWTService';
import { AuthService } from '../../services/auth.service';
import { Account } from '../models/account.model';
@Injectable()
export class AccountEffect {
    @Effect() LoginAccount$ = this.actions$
    .pipe(
        ofType<AddAccountAction>(AccountActionTypes.ADD_ITEM),
        mergeMap(data => this.userService.signIn(
                data.username,
                data.password
            ).pipe(
                map((result:ServerResponse) => {
                    if(result.code === 1){
                        const user: Account = this.jwtService.verify(result.data.user);
                        console.log(user);
                        if(user.status === false){
                            throw new Error('Bạn không có quyền đăng nhập');
                        } else {
                            localStorage.setItem('_token',result.data.token);
                            localStorage.setItem('_account',result.data.user);
                            this.router.navigate(['']);
                            return new AddAccountSuccessAction(user)
                        }
                    } else {
                        console.log(result)
                        throw new Error(result.message);
                    }
                }),
                catchError(err => of(new AddAccountFailureAction(err)))
            ),
        ),
    );


    @Effect() Logout$ = this.actions$
    .pipe(
        ofType<DeleteAccountAction>(AccountActionTypes.DELETE_ITEM),
        mergeMap(data => this.userService.logout()
            .then(data => {
                this.router.navigateByUrl('/auth');
                return new DeleteAccountSuccessAction(null)
            }).catch(err => new DeleteAccountFailureAction(err))
        ),
    );

    constructor(
        private actions$: Actions,
        private userService: AuthService,
        private jwtService: JWTService,
        private router: Router,
    ){

    }
}