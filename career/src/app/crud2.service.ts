import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  StudentDetails,
  UniqueConstraintError,
} from './student-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Crud2Service { 
     constructor(private http: HttpClient) { }
   headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
});
private url = 'http://localhost:3200/';

Insert(
  Details:StudentDetails
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.url + 'voc/Insert',
    Details,
    { headers: this.headers }
  );
  }
  Read(hallticketno: number): Observable<Read> {
    return this.http.get<Read>(`${this.url}voc/Read${hallticketno}`);
  }
  Delete(hallticketno: number): Observable<InsertedSuccess> {
    console.log(`${this.url}voc/Delete${hallticketno}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}voc/Delete${hallticketno}`
    );
  }
  Update(hallticketno: number, Details: StudentDetails) {
    return this.http.put(`${this.url}voc/Update${hallticketno}`, Details, {
      headers: this.headers 
    });
  }
  }