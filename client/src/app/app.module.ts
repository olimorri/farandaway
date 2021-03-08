import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { CreateTripInitialInfoComponent } from './create-trip/create-trip-initial-info/create-trip-initial-info.component';
import { CreateTripOverviewComponent } from './create-trip/create-trip-overview/create-trip-overview.component';
import { CreateTripOptionComponent } from './create-trip/create-trip-option/create-trip-option.component';
import { CreateTripAccordionComponent } from './create-trip/create-trip-accordion/create-trip-accordion.component';
import { TripPollComponent } from './trip-poll/trip-poll.component';
import { TripPollVotingComponent } from './trip-poll/trip-poll-voting/trip-poll-voting.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { TripPollResultsComponent } from './trip-poll/trip-poll-results/trip-poll-results.component';
import { UserDashboardTripComponent } from './user-dashboard/user-dashboard-trip/user-dashboard-trip.component';
import { TripPollBarsComponent } from './trip-poll/trip-poll-bars/trip-poll-bars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateTripComponent,
    CreateTripInitialInfoComponent,
    CreateTripOverviewComponent,
    CreateTripOptionComponent,
    CreateTripAccordionComponent,
    TripPollComponent,
    TripPollVotingComponent,
    UserDashboardComponent,
    UserLoginComponent,
    UserSignupComponent,
    TripPollResultsComponent,
    UserDashboardTripComponent,
    TripPollBarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
