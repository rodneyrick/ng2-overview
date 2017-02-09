import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login-page',
  templateUrl: 'login.component.html'
  // providers: [UserService]
})
export class LoginComponent {

  public loginForm = new FormGroup({
    email: new FormControl('email', Validators.required),
    password: new FormControl('password', Validators.required)
  });

  constructor(
    public fb: FormBuilder,
    private router: Router
  ) {}

  doLogin(event) {
    console.log(event);
    let form = this.loginForm.value;

    this.router.navigateByUrl('/user/' + form.email);

  }
}
