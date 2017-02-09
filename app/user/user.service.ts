

import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class UserService {

  users: Array<User>;

  constructor() {
    this.users = [
      {
        "name": "RodNelson",
        "username": "rodneyrick@gmail.com",
        "avatar_url": "https://avatars.githubusercontent.com/rodneyrick",
        "phrase": "Mais um Wiki!"
      },
      {
        "name": "Salim",
        "username": "danilovex",
        "avatar_url": "https://avatars.githubusercontent.com/danilovex",
        "phrase": "Hoje é Dia de MALDADE!"
      }
      // {
      //   "username": "danilovex",
      //   "avatar_url": "https://avatars.githubusercontent.com/danilovex"
      // },
    ];
  }

  getUsers() : Promise<Array<User>> {
    return Promise.resolve(this.users);
  }

  getUser(username: string): Promise<User> {
    return Promise.resolve(
        this.users.find( user => user.username === username )
    );
  }

}
