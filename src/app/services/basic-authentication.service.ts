import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN ='token'
export const AUTHENTICATED_USER = 'authenticateUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {



  constructor(private http: HttpClient) { }

  /*authenticate(userName: string, password: string) {
    if (userName === 'user' && password === 'password') {
      sessionStorage.setItem('userLoggedIn', userName)

      return true;
    }
    return false;
  }*/

  executeBasicAuthenticationService(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString

    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers: header })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem( TOKEN, basicAuthHeaderString);

            return data;
          }
        )
      )

    // console.log("execute Hello World Bean Service")
  }

 /* createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString

  }*/

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)

      return null
  }


  loggedInValidation() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)

    return !(user === null) //return true if user is different to null
  }

  logout() {

    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}


export class AuthenticationBean {

  constructor(public message: String) { }
}





