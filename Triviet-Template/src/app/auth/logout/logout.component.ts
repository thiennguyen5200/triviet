import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx-store/models/app-state.model';
import { DeleteAccountAction } from '../../ngrx-store/actions/account.action';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorResponse } from '../../ngrx-store/models/types.model';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {
  loading$: Observable<Boolean>;
  loading: Boolean;
  error$: Observable<ErrorResponse>;
  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { 
    this.store.dispatch(new DeleteAccountAction())
    this.loading$ = this.store.select(state => state.account.loading);
    this.loading$.subscribe(data => this.loading = data);
    this.error$ = this.store.select(state => state.account.error);
    this.error$.subscribe(err => {
      console.log(err)
    });
  }

  ngOnInit() {
  }
}
