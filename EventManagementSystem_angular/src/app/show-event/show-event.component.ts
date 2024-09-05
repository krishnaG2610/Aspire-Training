import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {
  events: any[] = [];
  message: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.http.get('http://localhost:7000/auth/showEvent')
      .subscribe({
        next: (data: any) => {
          this.events = data;
        },
        error: (error) => {
          console.error('Error fetching events:', error);
          this.message = 'An error occurred while fetching events.';
        }
      });
  }
}
