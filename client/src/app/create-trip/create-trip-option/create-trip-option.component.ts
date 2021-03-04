import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TripOption } from 'src/app/interfaces/trip-option';

@Component({
  selector: 'app-create-trip-option',
  templateUrl: './create-trip-option.component.html',
  styleUrls: ['./create-trip-option.component.css']
})
export class CreateTripOptionComponent implements OnInit {

  @Input() optionTitle: string = '';

  tripOption: TripOption | undefined;
  clicked : boolean = false;
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
    if (this.tripOption.nights === 1) {
      this.timeFrame = 'night'
    }
    this.submitTripOption();
  }

  btnClicked() {
    this.clicked = true;
  }

}
