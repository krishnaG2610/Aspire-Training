import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent {
  isFormSubmitted = false;
  formData = {
    name: '',
    phone: '',
    location: ''
  };

  constructor(private http: HttpClient) {}

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.formData = {
      ...this.formData,
      [name]: value
    };
  }

  async handleSubmit(event: Event) {
    event.preventDefault();

    try {
      const response = await this.http.post('http://localhost:7000/auth/final', this.formData).toPromise();
      if (response) {
        this.isFormSubmitted = true;
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
}
