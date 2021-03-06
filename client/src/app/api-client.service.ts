import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from './interfaces/trip';
import { CreateTripResponse } from './interfaces/create-trip-response';
import { AdditionalTripInfo } from './interfaces/additional-trip-info';
import { User } from './interfaces/user';
import { Invitee } from './interfaces/invitee';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  userSignUp(newUser: User): Observable<User> {
    const url = `${this.baseUrl}/users`;
    const body = JSON.parse(JSON.stringify(newUser));
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(url, body, { headers, observe: 'body' });
  }

  getUser(id: number): Observable<User[]> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.get<User[]>(url);
  }

  getUserId(email: string): Observable<any> {
    const url = `${this.baseUrl}/getUserId`;
    const headers = { emailAddress: JSON.parse(JSON.stringify(email)) };
    return this.http.get<any>(url, { headers });
  }

  getInviteeTrips(id: number): Observable<Trip[]> {
    const url: string = `${this.baseUrl}/inviteeTrips/${id}`;
    return this.http.get<Trip[]>(url);
  }

  addInvitee(
    userId: number,
    email: string,
    tripId: number,
  ): Observable<Invitee> {
    const url = `${this.baseUrl}/addFriend/${tripId}`;
    const userInfo = { emailAddress: email, userId: userId };
    const body = JSON.parse(JSON.stringify(userInfo));
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.http.post<Invitee>(url, body, { headers });
  }

  userLogin(email: string, password: string): Observable<User[]> {
    const url = `${this.baseUrl}/login/${email}`;
    const headers = { password };
    return this.http.get<User[]>(url, { headers });
  }

  postTrip(trip: Trip): Observable<CreateTripResponse> {
    const url = `${this.baseUrl}/trips/1`;
    const body = JSON.parse(JSON.stringify(trip));
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<CreateTripResponse>(url, body, {
      headers,
      observe: 'body',
    });
  }

  getTrip(id: number): Observable<Trip[]> {
    const url = `${this.baseUrl}/trips/${id}`;
    return this.http.get<Trip[]>(url);
  }

  vote(optionId: number | undefined) {
    const url = `${this.baseUrl}/options/${optionId}`;
    return this.http.put(url, null);
  }

  getAdditionalInfo(startDate: string, destination: string): Observable<any[]> {
    const url = `${this.baseUrl}/additionalInfo/${destination}/${startDate}`;
    return this.http.get<any[]>(url);
  }
}
