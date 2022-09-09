import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class MyClaimsDataService {

  constructor(
    private http: HttpClient
  ) { }
  
  getAllClaims(): Observable<any> {
    return this.http.get<any>(`${API_URL}/claims/getClaims`,);
  }
  deleteClaim(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/claims/deleteClaims/${id}`)
  }

  retrieveClaim(id: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/claims/getClaimById/${id}`)
  }
  updateClaim(claim: any): Observable<any> {    
    return this.http.post<any>(`${API_URL}/claims/addClaims`, claim);
  }
  saveClaim(claim: any): Observable<any> {
    return this.http.post<any>(`${API_URL}/claims/addClaims`, claim)
  }
  createBasicAuthenticationHttpHeader(): any {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString
  }
}
