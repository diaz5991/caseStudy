import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclaimComponent } from './addclaim/addclaim.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { MyClaimsComponent } from './my-claims/my-claims.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: 'myclaims', component: MyClaimsComponent},
  {path: 'addclaim', component: AddclaimComponent},
  {path: '**', component: ErrorComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
