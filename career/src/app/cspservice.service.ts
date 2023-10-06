import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  Details,
  UniqueConstraintError,
} from './details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CspserviceService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:7000/';

  Insert(
    Details: Details
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'csp/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(email: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}csp/Read${email}`);
  }
  Delete(email: String): Observable<InsertedSuccess> {
    console.log(`${this.url}csp/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}csp/Delete${email}`
    );
  }
  Update(email: String, Details: Details) {
    return this.http.put(`${this.url}csp/Update${email}`, Details, {
      headers: this.headers,
    });
  }
}
