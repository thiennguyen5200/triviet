import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx-store/models/app-state.model';
import { Observable } from 'rxjs';
import { AddAccountAction } from '../../ngrx-store/actions/account.action';
import { AuthService } from '../../services/auth.service';
import { ErrorResponse } from '../../ngrx-store/models/types.model';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showMessages: any;
  rememberMe: boolean;
  errors: string[];
  messages: string[];
  submitted: boolean;
  user: any;
  loginInFrom: FormGroup;

  loading$: Observable<Boolean>;
  loading: Boolean;
  error$: Observable<ErrorResponse>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private userService: AuthService
  ) { 
    this.showMessages = {error: false, success: false};
  }

  ngOnInit() {
    this.loginInFrom = this.fb.group({
      account: ['', Validators.required],
      password: ['', [ Validators.required, Validators.minLength(6)]]
    })
    this.submitted = true;
    if(this.userService.getToken){
      this.submitted = false;
      this.showMessages.success = true;
      this.router.navigateByUrl('/');
    }
  }

  get f() { return this.loginInFrom.controls; }

  onSignIn() {
    this.submitted = false;
    this.showMessages.error = false;
    const {account, password } = this.loginInFrom.value;
    this.store.dispatch(new AddAccountAction(account, password));
    this.loading$ = this.store.select(state => state.account.loading);
    this.loading$.subscribe(data => this.loading = data);
    this.error$ = this.store.select(state => state.account.error);
    this.error$.subscribe(err => {
      console.log(err)
      if(err) {
        if(err.code === 0) {
          this.showMessages.error = true;
          this.loginInFrom.get('password').setValue('');
          this.errors = [err.message];
        } else {
          this.showMessages.success = true;
          this.messages = [err.message];
        }
      }
    });
  }
}
