import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Trip } from '../interfaces/trip';

@Component({
  selector: 'app-trip-poll',
  templateUrl: './trip-poll.component.html',
  styleUrls: ['./trip-poll.component.css'],
})
export class TripPollComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiClientService: ApiClientService,
  ) {}

  tripId: any = '';

  trip: Trip | undefined;

  title: string | undefined;

  ngOnInit(): void {
    const { tripId } = this.route.snapshot.params;
    this.tripId = tripId;
    this.getTrip(tripId);
  }

  getTrip(id: number) {
    this.apiClientService.getTrip(id).subscribe((trip) => {
      this.trip = trip[0];
      if (this.trip.options) {
        // sort options when they come through from db
        this.trip.options.sort((a, b) => (a.title >= b.title ? 1 : -1));
      }
    });
  }
}
