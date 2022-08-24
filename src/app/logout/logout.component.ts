import { Component, OnInit } from '@angular/core';
import { AuthenticationHARCODEDService } from '../services/authentication-harcoded.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authenticationHARCODEDService: AuthenticationHARCODEDService) { }

  ngOnInit(): void {

    this.authenticationHARCODEDService.logout();

  }

}
