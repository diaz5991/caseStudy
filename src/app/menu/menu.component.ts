import { Component, OnInit } from '@angular/core';
import { AuthenticationHARCODEDService } from '../services/authentication-harcoded.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authenticationHARCODEDService: AuthenticationHARCODEDService) { }

  ngOnInit(): void {

  }

  closeSession(){
   
   this.authenticationHARCODEDService.logout()
    
  }

}
