import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user.model';
import { FromHttp } from '../util/fromHttp';

@Injectable()
export class UserService {

  private url: string = 'app/user/users.json';

  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get(this.url)
      .map(FromHttp.extractData)
      .catch(FromHttp.handleError);
  }

  getUser(email: string): Observable<User> {
    return this.http
      .get(this.url)
      .map((res: Response) => res.json().data.find( u => u.email === email))
      .catch(FromHttp.handleError);
  }

}
