import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule)},
  {path: 'welcome/:name', loadChildren: () => import('./Components/welcome/welcome.module').then(m => m.WelcomeModule), canActivate: [RouteGuardService]},
  {path: 'myclaims', loadChildren: () => import('./Components/my-claims/my-claims.module').then(m => m.MyClaimsModule), canActivate: [RouteGuardService]},
  {path: 'addclaim', loadChildren: () => import('./Components/add-claim/add-claim.module').then(m => m.AddClaimModule), canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: ErrorComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
