import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomDadJokeService {

  constructor(private http: HttpClient) {
      const headers: new HttpHeaders({
        'Content-Type':  'application/json'
      });
  }

  getDadJoke(): Observable<any> {
    return this.http.post<any>('https://icanhazdadjoke.com/',this.headers);
  }
}
