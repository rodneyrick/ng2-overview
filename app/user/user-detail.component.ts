import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { UserServicePromise } from './user-promise.service';
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
    <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
    <div *ngIf="user" class="jumbotron text-center">
      <h3>{{ user.name }} - {{ user.username }}</h3>
      <img [src]="user.avatar_url" class="img-responsive img-circle">
      <h2>{{user.phrase}}</h2>
    </div>
  `,
  providers: [UserServicePromise]
})
export class UserDetailComponent implements OnInit{

  service: UserServicePromise;
  user: User;
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.service = new UserServicePromise();
    let username = this.route.snapshot.params['username'];
    this.service.getUser(username).then( u => this.user = u);
  }

  goBack() {
    this.router.navigate(['/user']);
  }
}
