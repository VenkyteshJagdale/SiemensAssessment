// src/app/register/register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s,'-]*$/)]]
    });
  }

  // api call
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:7000/api/auth/register', this.registerForm.value)
        .subscribe(response => {
          console.log('Registration successful', response);
        }, error => {
          console.error('Registration failed', error);
        });
    }
  }
}
