import { Component, Input, OnInit } from '@angular/core';
import { TripOption } from '../../interfaces/trip-option';

@Component({
  selector: 'app-create-trip-overview',
  templateUrl: './create-trip-overview.component.html',
  styleUrls: ['./create-trip-overview.component.css']
})
export class CreateTripOverviewComponent implements OnInit {

  @Input() tripTitle: string | undefined;
  @Input() tripOrigin: string | undefined;
  tripOptions: TripOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTripOption(newTripOption: TripOption) {
    this.tripOptions.push(newTripOption);
  }
}
