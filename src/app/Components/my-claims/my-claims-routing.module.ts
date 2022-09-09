import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyClaimsComponent } from './my-claims.component';

const routes: Routes = [{path: '', component: MyClaimsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyClaimsRoutingModule { }
