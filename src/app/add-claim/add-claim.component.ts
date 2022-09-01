import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { MyClaimsModel } from '../my-claims/my-claims.component';

import { MyClaimsDataService } from '../services/data/my-claims-data.service';



@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {



  claimsModel!: MyClaimsModel; //investigar


  constructor(private service: MyClaimsDataService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.claimsModel = new MyClaimsModel(0,'',false,'','')

    if (id != -1) {
      this.service.retrieveClaim(id).subscribe(data => {
        this.claimsModel = data
        //console.log(data)
      }
      )
    }
 

  }

  saveClaim() {
    

    const id = 0
    if (id === 0) {
      this.service.saveClaim(this.claimsModel).subscribe(data => {
        this.claimsModel = data

        console.log(data)

      })
      this.router.navigate(['myclaims'])
    }else{
      this.service.saveClaim(this.claimsModel).subscribe(data => {
        this.claimsModel = data

      })
      this.router.navigate(['myclaims'])
    }
  }
    

  



}
