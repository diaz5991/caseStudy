import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationHARCODEDService } from '../services/authentication-harcoded.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  name = ''
  password = ''
  passwordVerification = ''
  newUserFlag = false
  email = ''
  accessLevel = 'user'
  errorMessage = 'Please confirm your password correctly'
  errorFlag = false
  createBtn=true;

  constructor(private auth: AuthenticationHARCODEDService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newUserReady() {
    if (this.password === this.passwordVerification) {
      this.newUserFlag = true
      this.createBtn =false

    } else {
      this.errorFlag = true
    }
  }
  goToLogin() {
    this.router.navigate(['login'])
  }
}


