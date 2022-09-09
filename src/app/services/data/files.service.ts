import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http:HttpClient
  ) {}

  uploadFile(type: string, file: File, name: string, id: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    formData.append('name', name);    
    formData.append('id', id);
    return this.http.post<any>(`${API_URL}/claims/uploadFile`, formData);
  }
  viewFile(id: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/claims/viewFile/${id}`, {
      observe: 'response',
      responseType: 'blob' as 'json'
    });
  }
}
