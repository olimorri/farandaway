import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';

import { Trip } from '../interfaces/trip';
import { User } from '../interfaces/user';
import { TripInfoService } from '../trip-info.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiClientService: ApiClientService,
    private tripInfoService: TripInfoService,
  ) {}

  user: User | undefined;
  haveTrips: boolean = false;

  trips: Trip[] | undefined;

  ngOnInit(): void {
    const { userId } = this.route.snapshot.params;
    this.getUser(userId);
    this.getInviteeTrips(userId);
  }

  getUser(id: number) {
    this.apiClientService.getUser(id).subscribe((user) => {
      this.user = user[0];
      if (this.user) this.trips = this.user.trips;
      //this.tripInfoService.setTrip(this.trips);
      //this.haveTrips = true;
      if (!this.user) alert('User not found, please try again');
    });
  }

  getInviteeTrips(id: number) {
    this.apiClientService.getInviteeTrips(id).subscribe((trip) => {
      trip.map((singleTrip) => {
        this.trips?.push(singleTrip);
      });
    });
  }
}
