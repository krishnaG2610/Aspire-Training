import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  isBookingConfirmed: boolean = false;

  handleSubmit(event: Event) {
    event.preventDefault();
    this.isBookingConfirmed = true;
  }
}
