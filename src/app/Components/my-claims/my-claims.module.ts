import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyClaimsRoutingModule } from './my-claims-routing.module';
import { MyClaimsComponent } from './my-claims.component';
import { MaterialModule } from 'src/app/Material/material.module';


@NgModule({
  declarations: [MyClaimsComponent],
  imports: [
    CommonModule,
    MyClaimsRoutingModule,
    MaterialModule
  ]
})
export class MyClaimsModule { }
