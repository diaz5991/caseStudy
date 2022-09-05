import { Component, OnInit } from '@angular/core';
import { AuthenticationHARCODEDService } from '../services/authentication-harcoded.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authenticationHARCODEDService: AuthenticationHARCODEDService,
    private basicAuthService : BasicAuthenticationService) { }

  ngOnInit(): void {

  }

  closeSession(){
   
   this.basicAuthService.logout()
    
  }

}
