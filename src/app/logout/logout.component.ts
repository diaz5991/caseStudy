import { Component, OnInit } from '@angular/core';
import { AuthenticationHARCODEDService } from '../services/authentication-harcoded.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit(): void {

    this.basicAuthenticationService.logout();

  }

}
