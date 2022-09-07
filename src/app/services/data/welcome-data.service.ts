import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
/*
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString

    })*/
    return this.http.get('http://localhost:8081/basicAuth',
   // {headers : header}
    );

    // console.log("execute Hello World Bean Service")
  }

  /*createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString

  }*/
}
