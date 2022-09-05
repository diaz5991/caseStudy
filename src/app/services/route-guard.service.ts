import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterEvent, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationHARCODEDService } from './authentication-harcoded.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authenticationHARCODEDService: AuthenticationHARCODEDService,
    private router: Router,
    private basicAuthenticationService : BasicAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.basicAuthenticationService.loggedInValidation()) {
      return true
    }
    this.router.navigate(['login'])
    
    return false
  }
}
