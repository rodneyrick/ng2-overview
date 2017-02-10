import { Component } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'user-page',
  styles: [`
    .profile-card   {
      background: #f3f3f3;
      border-radius: 4px;
      padding: 10px;
      text-align: center;
    }
    .profile-card img  {
      max-width: 50%;
      margin: 12px auto;
    }
  `],
  template: `
    <h1>{{title}}</h1>
    <div class="row" *ngIf="users">

      <div class="col-sm-4" *ngFor="let user of users">
        <div class="profile-card" [routerLink]="['/user', user.username]">
          <img [src]="user.avatar_url" class="img-responsive img-circle">

          <h2>{{ user.name }}</h2>
          <p><a href="https://github.com/{{user.username}}">{{ user.username }}</a></p>
        </div>
      </div>

    </div>
  `,
  providers: [UserService]
})
export class UserComponent {

  users: Array<User>;
  title: string;
  errorMessage: string;

  constructor(private userService: UserService) {
    this.title = 'Test Titl';
    this.userService.getUsers()
      .subscribe(
        users => this.users = users,
        error =>  this.errorMessage = <any>error
      );
  }

}
