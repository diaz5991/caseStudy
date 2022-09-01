import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MyClaimsModelInt } from '../Interfaces/my-claims-int-model';
import { MyClaimsModel } from '../my-claims/my-claims.component';

import { MyClaimsDataService } from '../services/data/my-claims-data.service';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  myClaimsModel: MyClaimsModelInt | undefined
  
  id=0
  description= ''
  status= false
  creationDate= ''
  color=''
  model=''

  constructor(private service: MyClaimsDataService,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit(): void {

    // const id = Number(this.route.snapshot.paramMap.get('id'));

    // this.service.retrieveClaim(id).subscribe((data) => {
    //   this.myClaimsModel = data;
    //   this.model = String(this.myClaimsModel?.model)
    //   this.description = String(this.myClaimsModel?.description)
    //   this.status = Boolean(this.myClaimsModel?.status)
    //   this.color = String(this.myClaimsModel?.color)

    //   console.log(this.myClaimsModel)
     
    //   console.log(data)
   // })
  }

  saveClaim(){

    
    this.model =String( this.myClaimsModel?.model)
    this.description = String(this.myClaimsModel?.description)
    this.status = Boolean(this.myClaimsModel?.status)
    this.color = String(this.myClaimsModel?.color)

    console.log(this.model)

    this.service.saveClaim(this.myClaimsModel).subscribe((data) => {

      this.myClaimsModel= data

      console.log(this.myClaimsModel)
      console.log(data)
    })

  }
}
