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
  tripOptionTitles: string[] = ["Option 1", "Option 2", "Option 3"]

  constructor() { }

  ngOnInit(): void {
  }

  addTripOption(newTripOption: TripOption) {
    this.tripOptions.push(newTripOption);
  }
}
