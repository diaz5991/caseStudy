import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BasicAuthenticationService } from '../../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePass = true;
  userName = '';
  password = '';

  // errorMessage = 'invalid password or username';
  // errorFlag = false;
  color = '';
  // welcomeFlag = false;

  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {
    this.userName = 'user';
    this.password = 'password';
  }

  ngOnInit(): void {
  }
  handleBasicAuthLogin(): void {
    this.basicAuthenticationService.executeBasicAuthenticationService(this.userName, this.password).subscribe((data) => {
        console.log("este es la info" +data);
        this.router.navigate(['welcome', this.userName]);
        Swal.fire({
          icon: 'success',
          html: 'Welcome',
          showConfirmButton: false,
          timer: 3000,
          showCloseButton: true
        });
        // this.errorFlag = false
      },
      (error) => {
        // this.errorFlag = true
        Swal.fire({
          icon: 'error',
          html: 'invalid password or username',
          showConfirmButton: false,
          timer: 3000,
          showCloseButton: true
        });
      }
    )
  }
}
