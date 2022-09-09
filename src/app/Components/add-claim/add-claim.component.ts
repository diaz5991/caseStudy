import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilesService } from '../../services/data/files.service';
import { MyClaimsDataService } from '../../services/data/my-claims-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  formClaim = new FormGroup({});
  formFile = new FormGroup({});
  fileToUpload: File | undefined;
  succesfulresponse!: String;
  shortLink: string = "";

  constructor(
    private service: MyClaimsDataService,
    private router: Router,
    private fileservice: FilesService,
    private fb: FormBuilder
  ) {
    this.formFile = new FormGroup({
      path: new FormControl(''),
      fileName: new FormControl({value: '', disable: true}),
      uploadFile: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.formClaim = this.fb.group({
      description: ['', Validators.required],
      model: ['', Validators.required],
      plates: ['', Validators.required],
      status: ['', Validators.required]
    });
  }
  handleUpload(e: any): void {
    if (e !== null && e !== undefined) {
      this.fileToUpload = e.target.files[0];
      this.formFile.controls.uploadFile.setValue(this.fileToUpload);
      this.formFile.controls.fileName.setValue(this.fileToUpload?.name);
    } else {
      this.formFile.controls.path.setValue('');
      this.formFile.controls.uploadFile.setValue('');
      this.formFile.controls.fileName.setValue('');
    }
  }
  createClaim(): void {
    this.service.saveClaim(this.formClaim.value).subscribe((resp) => {
      const {id} = resp;
      const file = this.formFile.getRawValue();
      this.fileservice.uploadFile('application/pdf', file.uploadFile, file.uploadFile.name, id).subscribe((respFile) => {
        Swal.fire({
          icon: 'success',
          title: 'Add Claim',
          html: 'Claim created successfully.',
          showConfirmButton: false,
          showCloseButton: true,
          timer: 4000
        })
      });
    });
  }
}
