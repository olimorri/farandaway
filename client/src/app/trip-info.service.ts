import { Injectable } from '@angular/core';
import { Trip } from './interfaces/trip';

@Injectable({
  providedIn: 'root',
})
export class TripInfoService {
  constructor() {}

  trips: Trip[] | undefined;

  getTrip() {
    //return this.trip;
  }

  setTrip(trips: Trip[]) {
    return (this.trips = trips);
  }
}
