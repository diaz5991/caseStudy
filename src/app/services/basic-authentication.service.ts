import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {


  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {


    if (userName === 'hector' && password === 'password') {
      sessionStorage.setItem('userLoggedIn', userName)

      return true;
    }
    return false;
  }





  executeBasicAuthenticationService() {

    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString

    })
    return this.http.get<AuthenticationBean>('http://localhost:8081/basicAuth', { headers: header })

    // console.log("execute Hello World Bean Service")
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString

  }




  loggedInValidation() {
    let user = sessionStorage.getItem('userLoggedIn')

    return !(user === null) //return true if user is different to null
  }

  logout() {

    sessionStorage.removeItem('userLoggedIn')
  }


}

  export class AuthenticationBean{

    constructor(public message : String ){}
  }





