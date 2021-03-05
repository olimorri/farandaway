import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripPollComponent } from './trip-poll/trip-poll.component'
import { CreateTripComponent} from './create-trip/create-trip.component'
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: 'trips', component: CreateTripComponent},
  {path: '', component: CreateTripComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'trips/:tripId', component: TripPollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
