import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationHARCODEDService } from '../services/authentication-harcoded.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = `hector`
  password = ``
  errorMessage = 'invalid password or username'
  errorFlag = false
  color = ''



  constructor(private router: Router, private authenticationHARCODEDSerivce: AuthenticationHARCODEDService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.authenticationHARCODEDSerivce.authenticate(this.userName, this.password)) {
      this.router.navigate(['welcome', this.userName])
    }
    else {
      this.errorFlag = true
    }
    console.log(this.userName + this.password)
  }

  newUser(){
    this.router.navigate(['newUser'])
  }
}
