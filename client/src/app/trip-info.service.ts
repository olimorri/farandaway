import { Injectable } from '@angular/core';
import { Trip } from './interfaces/trip';

@Injectable({
  providedIn: 'root',
})
export class TripInfoService {
  constructor() {}

  trip: Trip | undefined;

  getTrip() {
    return this.trip;
  }

  setTrip(trip: Trip) {
    return (this.trip = trip);
  }
}
