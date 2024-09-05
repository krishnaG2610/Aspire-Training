import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { CommunityComponent } from './community/community.component';
import { ConcertComponent } from './concert/concert.component';
import { FinalComponent } from './final/final.component';
import { MeetupComponent } from './meetup/meetup.component';
import { SportsComponent } from './sports/sports.component';
import { TicketComponent } from './ticket/ticket.component';
import { TrackComponent } from './track/track.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BookComponent,
    CreateEventComponent,
    ShowEventComponent,
    BirthdayComponent,
    CommunityComponent,
    ConcertComponent,
    FinalComponent,
    MeetupComponent,
    SportsComponent,
    TicketComponent,
    TrackComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
