import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripOverviewComponent } from './create-trip/create-trip-overview/create-trip-overview.component';
import { TripPollComponent } from './trip-poll/trip-poll.component'
import { CreateTripComponent} from './create-trip/create-trip.component'

const routes: Routes = [
  {path: '', component: CreateTripComponent},
  {path: 'trips/:tripId', component: TripPollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
