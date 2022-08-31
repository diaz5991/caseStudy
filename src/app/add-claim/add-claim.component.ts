import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MyClaimsDataService } from '../services/data/my-claims-data.service';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  constructor(service:MyClaimsDataService) { }

  ngOnInit(): void {

  
  }

}
