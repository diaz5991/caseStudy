import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddClaimRoutingModule } from './add-claim-routing.module';
import { MaterialModule } from 'src/app/Material/material.module';
import { AddClaimComponent } from './add-claim.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddClaimComponent],
  imports: [
    CommonModule,
    AddClaimRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AddClaimModule { }
