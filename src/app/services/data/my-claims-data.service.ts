import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';
import { MyClaimsModelInt } from 'src/app/Interfaces/my-claims-int-model';
import { MyClaimsModel } from 'src/app/my-claims/my-claims.component';

@Injectable({
  providedIn: 'root'
})
export class MyClaimsDataService {

  constructor(private http: HttpClient) { }

  getAllClaims() {
    return this.http.get<MyClaimsModel[]>(`${API_URL}/claims/getClaims`,);
  }

  deleteClaim(id: number): Observable<any> {

    return this.http.delete(`${API_URL}/claims/deleteClaims/${id}`)
  }

  retrieveClaim(id: number): Observable<any> {

    return this.http.get<MyClaimsModel>(`${API_URL}/claims/getClaimById/${id}`)
  }

  updateClaim(claim: MyClaimsModel) {


    return this.http.put<MyClaimsModel>(`${API_URL}/claims/addClaims`, claim)
  }
  saveClaim(claim: MyClaimsModel) {

    return this.http.post<MyClaimsModel>(`${API_URL}/claims/addClaims`, claim)
  }




  createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString

  }



}
