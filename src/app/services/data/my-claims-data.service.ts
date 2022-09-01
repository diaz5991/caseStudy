import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyClaimsModelInt } from 'src/app/Interfaces/my-claims-int-model';
import { MyClaimsModel } from 'src/app/my-claims/my-claims.component';

@Injectable({
  providedIn: 'root'
})
export class MyClaimsDataService {

  constructor(private http: HttpClient) { }

  getAllClaims() {

    return this.http.get<MyClaimsModel[]>('http://localhost:8081/claims/getClaims');
  }

  deleteClaim(id: number) {

    return this.http.delete(`http://localhost:8081/claims/deleteClaims/${id}`)
  }

  retrieveClaim(id: number): Observable<any> {
    return this.http.get<MyClaimsModel>(`http://localhost:8081/claims/getClaimById/${id}`)
  }

  updateClaim(claim: MyClaimsModel){
    return this.http.put<MyClaimsModel>(`http://localhost:8081/claims/addClaims`,claim)
  }
  saveClaim(claim: MyClaimsModel){
    return this.http.post<MyClaimsModel>(`http://localhost:8081/claims/addClaims`,claim)
  }
}
