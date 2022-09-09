import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { FileModel, MyClaimsModel } from '../Components/my-claims/my-claims.component';
import { FilesService } from '../services/data/files.service';

import { MyClaimsDataService } from '../services/data/my-claims-data.service';



@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  claimsModel!: MyClaimsModel; //investigar
  filemodel!: FileModel;
  succesfulresponse!: String;
  shortLink: string = "";


  constructor(private service: MyClaimsDataService,
    private route: ActivatedRoute,
    private router: Router,
    private fileservice: FilesService,



  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.claimsModel = new MyClaimsModel(0, '', false, '', '')

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
    } else {
      this.service.saveClaim(this.claimsModel).subscribe(data => {
        this.claimsModel = data

      })
      this.router.navigate(['myclaims'])
    }
  }


  inFileUpload(event: any) {
    this.filemodel.file = event.target.files[0]

  }

  uploadFile() {
    const fileData = new FormData();
    fileData.append("file", this.filemodel.file, this.filemodel.file.type)

    this.fileservice.uploadFile(fileData).subscribe((response) => {

      if (response.status === 200) {
        this.filemodel.postresponse = response;
        this.succesfulresponse = this.filemodel.postresponse.body.message;
      } else {
        this.filemodel.succesfulresponse = "Image could not be uploaded"
      }


    })


  }



}

