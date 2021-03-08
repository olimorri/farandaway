import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';

import { Trip } from '../interfaces/trip';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiClientService: ApiClientService,
  ) {}

  user: User | undefined;
  haveTrips: boolean = false;

  trips: Trip[] | undefined;

  ngOnInit(): void {
    const { userId } = this.route.snapshot.params;
    this.getUser(userId);
  }

  getUser(id: number) {
    this.apiClientService.getUser(id).subscribe((user) => {
      this.user = user[0];
      if (this.user) this.trips = this.user.trips;
      //this.haveTrips = true;
      if (!this.user) alert('User not found, please try again');
    });
  }
}
