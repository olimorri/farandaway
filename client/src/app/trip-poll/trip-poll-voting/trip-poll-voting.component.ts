import { Component, Input, OnInit } from '@angular/core';
import { TripOption } from 'src/app/interfaces/trip-option';
import { ApiClientService } from '../../api-client.service';

@Component({
  selector: 'app-trip-poll-voting',
  templateUrl: './trip-poll-voting.component.html',
  styleUrls: ['./trip-poll-voting.component.css'],
})
export class TripPollVotingComponent implements OnInit {
  @Input() option: TripOption | undefined;

  @Input() tripId: number = 0;

  averageTemp: number = 0;
  hoursOfSun: number = 0;
  heroImg: string = '';
  flightPrice: number = 0;
  time: string = 'night';

  constructor(private apiClientService: ApiClientService) {}

  ngOnInit(): void {
    if (this.option && this.option.votes === null) this.option.votes = 0;
    this.getInfo();
  }

  handleVote() {
    if (this.option) {
      this.apiClientService.vote(this.option.id).subscribe(() => {
        if (this.option) this.option.votes++;
      });
    }
  }

  getInfo() {
    if (this.option) {
      const startDate = this.option.startDate;
      const destination = this.option.destination;
      if (this.option.nights > 1) this.time = 'nights';
      this.apiClientService
        .getAdditionalInfo(startDate, destination)
        .subscribe((info) => {
          this.averageTemp = info[0];
          this.hoursOfSun = info[1];
          this.heroImg = info[2];
          this.flightPrice = info[3];
        });
    }
  }
}
