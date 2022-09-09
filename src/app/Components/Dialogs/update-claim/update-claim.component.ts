import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyClaimsDataService } from 'src/app/services/data/my-claims-data.service';

@Component({
  selector: 'app-update-claim',
  templateUrl: './update-claim.component.html',
  styleUrls: ['./update-claim.component.css']
})
export class UpdateClaimComponent implements OnInit {

  detail: any;
  formData = new FormGroup({});

  constructor(
    private dialogRef: MatDialogRef<UpdateClaimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private claimService: MyClaimsDataService,
    private fb: FormBuilder,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.initForm();
    this.getInfoClaim();
  }
  initForm(): void {
    this.formData = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required],
      model: ['', Validators.required],
      plates: ['', Validators.required]
    });
  }
  getInfoClaim(): void {
    this.claimService.retrieveClaim(this.data.id).subscribe((resp) => {
      this.detail.resp;
      this.patchValues();
    });
  }
  patchValues(): void {
    this.formData.patchValue({
      description: this.detail.description,
      status: this.detail.status,
      model: this.detail.model,
      plates: this.detail.plates
    });
  }
  update(): void {
    this.dialogRef.close(this.formData.value);
  }
}
