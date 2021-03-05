import { Component, OnInit } from '@angular/core';
import { ApiClientService} from '../api-client.service';

import { Trip } from '../interfaces/trip';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private apiClientService: ApiClientService) { }

  user: User | undefined;
  trips: Trip[] | undefined;

  ngOnInit(): void {
    this.getUser(1);
  }

  getUser(id: number) {
    this.apiClientService.getUser(id)
    .subscribe(user => {
      this.user = user[0]
      if (this.user) this.trips = this.user.trips;
      
    })

  }
}
