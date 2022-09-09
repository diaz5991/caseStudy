import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule)},
  {path: 'welcome/:name', loadChildren: () => import('./Components/welcome/welcome.module').then(m => m.WelcomeModule), canActivate: [RouteGuardService]},
  {path: 'myclaims', loadChildren: () => import('./Components/my-claims/my-claims.module').then(m => m.MyClaimsModule), canActivate: [RouteGuardService]},
  { path: 'addclaim/:id', component: AddClaimComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  {path: '**', component: ErrorComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
