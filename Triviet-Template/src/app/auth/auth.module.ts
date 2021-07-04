import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NbAuthModule } from '@nebular/auth';
import { NbCheckboxModule, NbIconModule, NbAlertModule, NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NbAuthModule,
    NbCheckboxModule,
    NbIconModule,
    NbAlertModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class AuthModule { }
