import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { FileModel } from 'src/app/Components/my-claims/my-claims.component';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http:HttpClient) {

   }

   
   uploadFile(fileData: FormData){
     
      
    return this.http.post<FormData>(`${API_URL}/claims/uploadFile`,fileData,{observe: 'response'});
  }
}
