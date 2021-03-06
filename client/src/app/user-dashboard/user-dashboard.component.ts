import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';

import { Trip } from '../interfaces/trip';
import { User } from '../interfaces/user';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiClientService: ApiClientService,
    private userInfoService: UserInfoService,
  ) {}

  user: User | undefined;
  haveTrips: boolean = false;

  trips: Trip[] | undefined;

  ngOnInit(): void {
    const { userId } = this.route.snapshot.params;
    //performs a check to see if user is logged in, if so => get the user and trips
    const userLoggedIn = this.userInfoService.getUserId();
    if (userLoggedIn) {
      this.getUser(userId);
      this.getInviteeTrips(userId);
      this.haveTrips = true;
    }
  }

  getUser(id: number) {
    this.apiClientService.getUser(id).subscribe((user) => {
      this.user = user[0];
      if (this.user) this.trips = this.user.trips;
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
