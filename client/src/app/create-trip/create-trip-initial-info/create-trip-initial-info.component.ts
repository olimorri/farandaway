import { Component, EventEmitter, Output } from '@angular/core';
import { FirstInfo } from 'src/app/interfaces/first-info';

@Component({
  selector: 'app-create-trip-initial-info',
  templateUrl: './create-trip-initial-info.component.html',
  styleUrls: ['./create-trip-initial-info.component.css']
})
export class CreateTripInitialInfoComponent {

  title: string | undefined;
  origin: string | undefined;
  info: FirstInfo = {title:'', origin: ''};

  @Output() newInfoEvent =  new EventEmitter<FirstInfo>();

  addTripInfo(info: FirstInfo) {
    this.newInfoEvent.emit(info);
  }

}
