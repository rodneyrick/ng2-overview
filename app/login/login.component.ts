import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id,
  selector: 'login-page',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent {

  errorMessage: string;

  public loginForm = new FormGroup({
    email: new FormControl('rodneyrick@gmail.com'), // , Validators.required),
    password: new FormControl('password') // , Validators.required)
  });

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  doLogin(event) {
    console.log(event);
    let form = this.loginForm.value;

    this.userService.getUser(form.email)
      .subscribe(
        user => {
          this.router.navigateByUrl('/user/' + user.username);
        },
        error =>  this.errorMessage = <any>error
      );

    // this.router.navigateByUrl('/user/' + form.email);

  }
}
