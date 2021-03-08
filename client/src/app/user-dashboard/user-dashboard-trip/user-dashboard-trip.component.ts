import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';

@Component({
  selector: 'app-user-dashboard-trip',
  templateUrl: './user-dashboard-trip.component.html',
  styleUrls: ['./user-dashboard-trip.component.css'],
})
export class UserDashboardTripComponent implements OnInit {
  @Input() trip: Trip | undefined;

  constructor() {}

  ngOnInit(): void {}
}
