import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotelComponent } from './motel.component';
import { MotelCreateComponent } from './motel-create/motel-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotelRoutingModule } from './motel-routing.module';
import { MotelDetailsComponent } from './motel-details/motel-details.component';
import { MotelUpdateComponent } from './motel-update/motel-update.component';
import { NbCardModule, NbButtonModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    MotelComponent, 
    MotelCreateComponent, 
    MotelDetailsComponent, 
    MotelUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MotelRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule
  ]
})
export class MotelModule { }
