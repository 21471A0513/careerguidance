 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  ConDetails,
  UniqueConstraintError,
} from './con-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Crud5Service {
  Delete(Roll: String) {
    throw new Error('Method not implemented.');
  }
  Update(Roll: String, Details: Crud5Service) {
    throw new Error('Method not implemented.');
  }
  Read(Roll: String) {
    throw new Error('Method not implemented.');
  } 
     constructor(private http: HttpClient) { }
   headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
});
private url = 'http://localhost:9000/';

Insert(
  Details:ConDetails
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.url + 'feed/Insert',
    Details,
    { headers: this.headers }
  );
  }
}