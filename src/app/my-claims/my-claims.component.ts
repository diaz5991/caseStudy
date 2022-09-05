import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyClaimsModelInt } from '../Interfaces/my-claims-int-model';

import { MyClaimsDataService } from '../services/data/my-claims-data.service';


export class MyClaimsModel {

  constructor(

    public id: number,
    public description: String,
    public status: boolean,
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

  constructor(private claimsService: MyClaimsDataService,
    private router: Router) { }

  ngOnInit(): void {

    this.refreshMyClaims()

  }

  refreshMyClaims() {

    this.claimsService.getAllClaims().subscribe(
      response => {
        this.claimsTable = response;
        console.log("aqui esta el refresh")
      }
    )

  }

  deleteClaim(id: number) {

    this.claimsService.deleteClaim(id).subscribe((response) => {
      console.log(response)
    },
    (_) => {
      this.message = "Claim deleted"
      this.refreshMyClaims();
    })
  
    console.log("something", id)
  }

  updateClaim(id: number) {

    this.router.navigate([`addclaim/${id}`])

  }

  addClaim() {

    this.router.navigate(['addclaim/-1'])
  }


}

