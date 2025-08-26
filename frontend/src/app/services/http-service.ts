import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../env';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTexts(): Observable<any[]>{
    return this.http.get<any[]>(env.apiUrl, { withCredentials: true });
  }
}