import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  createForm(): void {
    this.loginForm = this.fb.group({
      emailid : [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  get emailid() { return this.loginForm.get('emailid'); }
  get password() { return this.loginForm.get('password'); }

  login(formData): void {
    this.auth.login(formData.emailid, formData.password)
      .then(res => {
        if (res) {
          this.router.navigate(['/dashboard']);
        }
      })
      .catch(res => {
        this.createForm();
      });
  }

  signup() {
    // Under Development
  }

}
