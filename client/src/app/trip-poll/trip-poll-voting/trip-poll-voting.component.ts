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

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit(): void {
    if (this.option && this.option.votes === null) this.option.votes = 0;
  }

  handleVote() {
    if (this.option) {
      this.apiClientService.vote(this.option.id)
        .subscribe(
          () => { if (this.option) this.option.votes++; },
        );
    }
  }
}
