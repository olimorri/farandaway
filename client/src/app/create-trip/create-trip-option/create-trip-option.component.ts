import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TripOption } from 'src/app/interfaces/trip-option';

@Component({
  selector: 'app-create-trip-option',
  templateUrl: './create-trip-option.component.html',
  styleUrls: ['./create-trip-option.component.css']
})
export class CreateTripOptionComponent implements OnInit {

  tripOption: TripOption | undefined;
  clicked : boolean = false;
  confirmed: boolean = true;
  timeFrame: string = 'nights';

  constructor() { }

  @Output() newTripOptionEvent = new EventEmitter<TripOption>();

  ngOnInit(): void {
  }

  submitTripOption() {
    this.newTripOptionEvent.emit(this.tripOption);
  }

  addTripOption(newTripOption: TripOption) {
    this.tripOption = newTripOption;
    this.confirmed = false;
    if (this.tripOption.nights === 1) {
      this.timeFrame = 'night'
    }
    this.submitTripOption();
  }

  btnClicked() {
    this.clicked = true;
  }

}
