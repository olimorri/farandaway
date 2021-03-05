import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Trip} from './interfaces/trip';
import { CreateTripResponse } from './interfaces/create-trip-response';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  postTrip(trip: Trip) : Observable<CreateTripResponse> {
    const url = `${this.baseUrl}/trips/1`;
    const body = JSON.parse(JSON.stringify(trip));
    const headers = { 'Content-Type': 'application/json'}
    return this.http.post<CreateTripResponse>(url, body, {headers, "observe": "body"})
  }

  getUser(id: number) : Observable<User[]> {
    const url = `${this.baseUrl}/users/${id}`
    return this.http.get<User[]>(url);
  }

  getTrip(id: number) : Observable<Trip[]> {
    const url = `${this.baseUrl}/trips/${id}`
    return this.http.get<Trip[]>(url)
  }

  vote(optionId: number | undefined) {
    const url = `${this.baseUrl}/options/${optionId}`
    return this.http.put(url, null);
  }
}
