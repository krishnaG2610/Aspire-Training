import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { SignupComponent } from './signup/signup.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { BookComponent } from './book/book.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { CommunityComponent } from './community/community.component';
import { ConcertComponent } from './concert/concert.component';
import { FinalComponent } from './final/final.component';
import { MeetupComponent } from './meetup/meetup.component';
import { SportsComponent } from './sports/sports.component';
import { TicketComponent } from './ticket/ticket.component';
import { TrackComponent } from './track/track.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'event', component: EventComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'book', component: BookComponent},
  { path: 'CreateEvent', component: CreateEventComponent },
  { path: 'ShowEvent', component: ShowEventComponent },
  {path:'birthday', component:BirthdayComponent },
  { path: 'community', component: CommunityComponent },
  { path:'concert', component:ConcertComponent},
  { path:'final' , component: FinalComponent},
  { path:'meetup', component: MeetupComponent},
  { path :'sports', component:SportsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'birthday', component:BirthdayComponent},
  {path:'ticket', component:TicketComponent},
  {path:'track', component:TrackComponent},
  { path: '', redirectTo: '/event', pathMatch: 'full' },
  { path: '**', redirectTo: '/event' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
