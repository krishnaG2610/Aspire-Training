import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventForm!: FormGroup;  // Note the use of '!'
  events: any[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventDate: ['', Validators.required],
      eventLocation: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      eventType: ['', Validators.required],
      eventDescription: ['', Validators.required]
    });
  }

  handleSubmit(): void {
    if (this.eventForm.valid) {
      this.http.post('http://localhost:7000/auth/CreateEvent', this.eventForm.value)
        .subscribe({
          next: (data: any) => {
            this.message = 'Event created successfully!';
            this.events.push(this.eventForm.value);
            this.eventForm.reset();
          },
          error: (error) => {
            console.error('Error:', error);
            this.message = 'An error occurred while creating the event.';
          }
        });
    }
  }
}
