import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'user-page',
  styles: [`
    img { 
      max-width: 300px%; 
      margin: 20px auto;
    }
  `],
  template: `
    <div *ngIf="user" class="jumbotron text-center">
      <h1>{{ user.name }} - {{ user.username }}</h1>
      <img [src]="user.avatar_url" class="img-responsive img-circle">
    </div>
  `,
  providers: [UserService]
})
export class UserDetailComponent implements OnInit{

  service: UserService;
  user: User;
  users: User[];

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.service = new UserService();
    let username = this.route.snapshot.params['username'];
    this.service.getUser(username).then( u => this.user = u);
  }

}