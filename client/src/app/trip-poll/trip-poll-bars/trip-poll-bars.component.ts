import { Component, Input, OnInit } from '@angular/core';
import { TripOption } from 'src/app/interfaces/trip-option';

@Component({
  selector: 'app-trip-poll-bars',
  templateUrl: './trip-poll-bars.component.html',
  styleUrls: ['./trip-poll-bars.component.css'],
})
export class TripPollBarsComponent implements OnInit {
  @Input() option: TripOption | undefined;

  time: string = 'nights';

  constructor() {}

  ngOnInit(): void {
    if (this.option && this.option?.nights <= 1) {
      this.time = 'night';
    }
  }
}
