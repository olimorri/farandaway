import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from 'src/app/api-client.service';
import { Trip } from 'src/app/interfaces/trip';
import { TripOption } from 'src/app/interfaces/trip-option';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-trip-poll-results',
  templateUrl: './trip-poll-results.component.html',
  styleUrls: ['./trip-poll-results.component.css'],
})
export class TripPollResultsComponent implements OnInit {
  constructor(
    private apiClientService: ApiClientService,
    private route: ActivatedRoute,
    private userInfoService: UserInfoService,
  ) {}

  trip: Trip | undefined;
  userId: number | undefined;

  firstOption: TripOption | undefined;
  secondOption: TripOption | undefined;
  thirdOption: TripOption | undefined;

  ngOnInit(): void {
    const { tripId } = this.route.snapshot.params;
    this.getTripInfo(tripId);
    this.userId = this.userInfoService.getUserId();
  }

  getTripInfo(id: number) {
    this.apiClientService.getTrip(id).subscribe((trip) => {
      this.trip = trip[0];
      if (this.trip.options) {
        this.trip.options.sort((a, b) => (a.votes <= b.votes ? 1 : -1));
        this.firstOption = this.trip.options[0];
        this.secondOption = this.trip.options[1];
        this.thirdOption = this.trip.options[2];
      }
    });
  }
}
