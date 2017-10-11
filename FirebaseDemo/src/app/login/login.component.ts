import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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

  login(): void {
    alert(this.loginForm.value.password );
  }

}
