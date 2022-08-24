import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclaimComponent } from './addclaim/addclaim.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyClaimsComponent } from './my-claims/my-claims.component';
import { RouteGuardService } from './services/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'myclaims', component: MyClaimsComponent, canActivate: [RouteGuardService] },
  { path: 'addclaim', component: AddclaimComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
