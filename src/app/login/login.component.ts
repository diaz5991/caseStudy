import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = `user`
  password = `password`
  errorMessage = 'invalid password or username'
  errorFlag = false
  color = ''
  welcomeFlag = false

  constructor(private router: Router,
   // private authenticationHARCODEDSerivce: AuthenticationHARCODEDService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

 /* handleLogin() {
    if (this.authenticationHARCODEDbasicAuthenticationServiceSerivce.authenticate(this.userName, this.password)) {
      this.router.navigate(['welcome', this.userName])
    }
    else {
      this.errorFlag = true
    }
    console.log(this.userName + this.password)
  }*/

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeBasicAuthenticationService(this.userName, this.password).subscribe(
      data => {

        console.log("este es la info" +data)
        this.router.navigate(['welcome', this.userName])
        this.errorFlag = false
        
      },
      error => {
        console.log(error)
        this.errorFlag = true
      }
    )


    console.log(this.userName + this.password)


  }

  newUser() {
    this.router.navigate(['newUser'])
  }
}
