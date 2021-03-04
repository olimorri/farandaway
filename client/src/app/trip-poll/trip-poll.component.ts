import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-trip-poll',
  templateUrl: './trip-poll.component.html',
  styleUrls: ['./trip-poll.component.css']
})
export class TripPollComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id : number | undefined;

  ngOnInit(): void {
    const tripId = this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id= params['tripId'];
    })
  }

}
