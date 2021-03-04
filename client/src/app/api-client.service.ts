import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Trip} from './interfaces/trip';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  postTrip(trip: Trip) : Observable<any> {
    const url = `${this.baseUrl}/trips/1`;
    const body = JSON.parse(JSON.stringify(trip));
    const headers = { 'Content-Type': 'application/json'}
    return this.http.post<Trip>(url, body, {headers, "observe": "body"})
  }

  getTrip(id: number) : Observable<any> {
    const url = `${this.baseUrl}/trips/${id}`
    return this.http.get(url)
  }
}
