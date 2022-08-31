import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHARCODEDService {

  constructor() { }

  authenticate(userName: string, password: string) {

    //console.log('before login ' + this.loggedInValidation())

    if (userName === 'hector' && password === 'password') {
      sessionStorage.setItem('userLoggedIn', userName)

      //console.log('After login ' + this.loggedInValidation())
      return true;
    }
    return false;
  }

  loggedInValidation() {
    let user = sessionStorage.getItem('userLoggedIn')
    //console.log(user)
    return !(user === null) //return true if user is different to null
  }

  logout() {

    sessionStorage.removeItem('userLoggedIn')
  }
}


