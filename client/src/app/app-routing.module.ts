import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripPollComponent } from './trip-poll/trip-poll.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  { path: 'users/:userId', component: UserDashboardComponent },
  { path: 'trips/:tripId', component: TripPollComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'trips', component: CreateTripComponent },
  { path: '', component: CreateTripComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
