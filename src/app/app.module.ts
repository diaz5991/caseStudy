import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Components/error/error.component';
import { MyClaimsModel } from './Components/my-claims/my-claims.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { HttpInterceptorBasicAuthService } from './services/http/http-interceptor-basic-auth.service';
import { UpdateClaimComponent } from './Components/Dialogs/update-claim/update-claim.component';
import { MaterialModule } from './Material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    AddClaimComponent,
    UpdateClaimComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
