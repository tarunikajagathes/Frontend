import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedchangesGuard } from '../services/unsavedchanges.guard';
import { UserNotloginedService } from '../services/user-notlogined.service';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {path:"",component:AboutComponent,canDeactivate:[UnsavedchangesGuard],canActivate:[UserNotloginedService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
