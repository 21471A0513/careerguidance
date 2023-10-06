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
export class Crud1Service { 
     constructor(private http: HttpClient) { }
   headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
});
private url = 'http://localhost:2000/';

Insert(
  Details:StudentDetails
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.url + 'int/Insert',
    Details,
    { headers: this.headers }
  );
  }
  Read(hallticketno: number): Observable<Read> {
    return this.http.get<Read>(`${this.url}int/Read${hallticketno}`);
  }
  Delete(hallticketno: number): Observable<InsertedSuccess> {
    console.log(`${this.url}int/Delete${hallticketno}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}int/Delete${hallticketno}`
    );
  }
  Update(hallticketno: number, Details: StudentDetails) {
    return this.http.put(`${this.url}int/Update${hallticketno}`, Details, {
      headers: this.headers 
    });
  }
  }