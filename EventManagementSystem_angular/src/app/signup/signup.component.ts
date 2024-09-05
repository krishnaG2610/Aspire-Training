import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',  // Updated to match the correct selector
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm: FormGroup;
  msg: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      location: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:7000/auth/signup', this.registerForm.value)
        .subscribe(
          (response: any) => {
            if (response.status === 201) {
              this.msg = 'Sign Up Successful!';
            } else {
              this.msg = response.message || 'An error occurred';
            }
          },
          (error) => {
            console.error('Error during registration:', error);
            this.msg = error.error?.message || 'An error occurred';
          }
        );
    }
  }
}
