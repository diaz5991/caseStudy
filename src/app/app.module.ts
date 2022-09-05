import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { MyClaimsComponent, MyClaimsModel } from './my-claims/my-claims.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpInterceptorBasicAuthService } from './services/http/http-interceptor-basic-auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    AddClaimComponent,
    MyClaimsComponent,
    NewUserComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [
{
  provide :HTTP_INTERCEPTORS , useClass : HttpInterceptorBasicAuthService, multi:true
}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
