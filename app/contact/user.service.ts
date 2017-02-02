

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users: Array<any>;

  constructor() {
    this.users = [
      {
        "login": "rodneyrick",
        "avatar_url": "https://avatars.githubusercontent.com/rodneyrick"
      },
      {
        "login": "danilovex",
        "avatar_url": "https://avatars.githubusercontent.com/danilovex"
      }
      // {
      //   "login": "danilovex",
      //   "avatar_url": "https://avatars.githubusercontent.com/danilovex"
      // },
    ];
  }

  getUsers() {
    return Promise.resolve(this.users);
  }
}
