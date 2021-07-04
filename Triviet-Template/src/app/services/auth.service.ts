import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JWTService } from './JWTService';
import { map } from 'rxjs/operators';
import { Account } from '../ngrx-store/models/account.model';
import { URL } from '../ngrx-store/models/types.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private roter: Router,
    private jwtService: JWTService,
  ) { }

  signIn(account: string, password: string){
    const payload = { account: account, password: password };
    const jwt = this.jwtService.sign(payload);
    if (jwt) {
      return this.http.post(`${URL}auth/signinToken`,{ jwt: jwt })
      .pipe(map(data => data));
    }
  }

  verifyAccount(jwt: any){
    const user: Account = this.jwtService.verify(jwt);
    return user;
  }
  
  public get getToken(){
    return localStorage.getItem('_token');
  }
  
  public get getAccount(){
    const account = localStorage.getItem('_account');
    const user = this.verifyAccount(account)
    return user;
  }

  async logout() {
    localStorage.removeItem('_token');
    localStorage.removeItem('_account');
    return null;
  }
}