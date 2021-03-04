import { Component, OnInit } from '@angular/core';

import { TripOption } from '../interfaces/trip-option';



@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  tripTitle: string = "";
  tripOrigin: string = '';
  tripOptions: TripOption[] | [] = [];
  

  constructor() { }

  ngOnInit(): void {
  }

  addInfo(newInfo: any) {
    this.tripTitle = newInfo.title;
    this.tripOrigin = newInfo.origin;
  }

}
