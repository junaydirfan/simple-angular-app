import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private expressUrl = 'http://localhost:3000/';
  private httpOptions = {
  headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };
  private classes$ = new Observable<any>();
  constructor(private http : HttpClient) { }
  getClasses(){
    return this.classes$ = 
    this.http.get(this.expressUrl+"admin/classes");
    }
}
