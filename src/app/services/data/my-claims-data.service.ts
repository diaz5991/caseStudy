import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyClaimsModel } from 'src/app/my-claims/my-claims.component';

@Injectable({
  providedIn: 'root'
})
export class MyClaimsDataService {

  constructor(private http: HttpClient) { }

  getAllClaims() {

    return this.http.get<MyClaimsModel[]>('http://localhost:8081/claims/getClaims'); 
  }

  deleteClaim(id: number){

    return this.http.delete(`http://localhost:8081/claims/deleteClaims/${id}`)
  }

  retrieveClaim(id:number){

    return this.http.get<MyClaimsModel>(`http://localhost:8081/claims/getClaimById/${id}`)
  }
}
