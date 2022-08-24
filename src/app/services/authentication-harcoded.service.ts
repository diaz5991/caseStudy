import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHARCODEDService {

  constructor() { }

  authenticate(userName: string, password: string) {

    if (userName === 'hector' && password === 'password') {
sessionStorage.setItem('authenticatedUser',userName)
      return true;
    }
    return false;


  }
}
