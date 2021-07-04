import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotelComponent } from './motel.component';
import { MotelCreateComponent } from './motel-create/motel-create.component';
import { MotelDetailsComponent } from './motel-details/motel-details.component';
import { MotelUpdateComponent } from './motel-update/motel-update.component';

const routes: Routes = [{
  path: '',
  component: MotelComponent,
  children: [
    {
        path: 'details',
        component: MotelDetailsComponent,
    },
    {
        path: 'create',
        component: MotelCreateComponent,
    },
    {
        path: 'update',
        component: MotelUpdateComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotelRoutingModule {
}


