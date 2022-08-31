import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MyClaimsDataService } from '../services/data/my-claims-data.service';


export class MyClaimsModel {

  constructor(

    public id: number,
    public description: String,
    public status: boolean,
    public creationDate: Date,
    public color: String,
    public model: String

  ) {

  }
}

@Component({
  selector: 'app-my-claims',
  templateUrl: './my-claims.component.html',
  styleUrls: ['./my-claims.component.css']
})
export class MyClaimsComponent implements OnInit {
  claimsTable: MyClaimsModel[] = [];

  
  message = ""


  // claimsTable = [ //esuna lista
  // new MyClaimsModel(1, 'this is a description', false, new Date()),
  //new MyClaimsModel(2, 'this is a desfcription', false, new Date()),
  //new MyClaimsModel(3, 'this is a description', false, new Date())  ]

  constructor(private claimsService: MyClaimsDataService,
    private router:Router) { }

  ngOnInit(): void {

    this.refreshMyClaims()

  }

  refreshMyClaims() {

    this.claimsService.getAllClaims().subscribe(
      response => {
        this.claimsTable = response;
      }
    )

  }

  deleteClaim(id: number) {

    this.claimsService.deleteClaim(id).subscribe(response => {
      console.log(response)
    })
    this.message = "Claim deleted"
    this.refreshMyClaims();

    console.log("something", id)
  }

  updateClaim(id: number){

    this.router.navigate(['addclaim', id])

    console.log("something",id)

  }


}

