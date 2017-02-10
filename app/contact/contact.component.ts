import { Component } from '@angular/core';

import { ContactService } from './contact.service';

@Component({
  selector: 'contact-page',
  styles: [`
    .contact {
      float: left; 
      -webkit-box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.75);
      box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.75);
      margin: 15px;
      padding: 15px
    }
  `],
  template: `

    <div>
    i am contact page
    </div>
    <br>
    <div class="contact" *ngFor="let u of users">
      <h4>{{u.login}}</h4>
      <br>
      <img src="{{u.avatar_url}}"/>
    </div>
  `,
  providers: [ContactService]
})
export class ContactComponent {

  service: ContactService;
  users: Array<any> = [];

  constructor(){

    this.service = new ContactService();

    this.service.getUsers()
      .then(users => {
        this.users = users;
      });
  }

}