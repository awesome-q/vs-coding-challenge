import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<HttpResponse<any>> {
    return this.http.get('http://localhost:8080/events', {
      observe: 'response'
    });
  }
}
