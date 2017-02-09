

import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class UserServicePromise {

  users: Array<User>;

  constructor() {
    this.users = [
        {
            'name': 'RodNelson',
            'username': 'rodneyrick',
            'email': 'rodneyrick@gmail.com',
            'avatar_url': 'https://avatars.githubusercontent.com/rodneyrick',
            'phrase': 'Mais um Wiki!'
        },
        {
            'name': 'Salim',
            'username': 'danilovex',
            'email': 'danilovex@gmail.com',
            'avatar_url': 'https://avatars.githubusercontent.com/danilovex',
            'phrase': 'Hoje é Dia de MALDADE!'
        }
    ];
  }

  getUsers(): Promise<Array<User>> {
    return Promise.resolve(this.users);
  }

  getUser(username: string): Promise<User> {
    return Promise.resolve(
        this.users.find( user => user.username === username )
    );
  }

}
