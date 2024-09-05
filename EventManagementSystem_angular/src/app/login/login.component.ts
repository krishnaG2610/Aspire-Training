import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  msg: string = '';
  msgType: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    console.log('Submitting:', { email, password });

    try {
      const response = await this.http.post<any>('http://localhost:7000/auth/login', { email, password }).toPromise();
      console.log('Response Data:', response);

      if (response.msg_type === 'success') {
        this.msg = response.msg;
        this.msgType = response.msg_type;
        this.router.navigate(['/dashboard']);
      } else {
        this.msg = response.msg;
        this.msgType = response.msg_type;
      }
    } catch (error) {
      console.error('Error:', error);
      this.msg = 'Internal server error';
      this.msgType = 'error';
    }
  }
}
