import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { User } from './user.model';

describe('UserComponent', () => {

  let comp:    UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let users:   User[];
  let userService: UserService;

  beforeEach(() => {

    users = [
      {
        'name': 'RodNelson',
        'username': 'rodneyrick@gmail.com',
        'avatar_url': 'https://avatars.githubusercontent.com/rodneyrick',
        'phrase': 'Mais um Wiki!'
      },
      {
        'name': 'Salim',
        'username': 'danilovex',
        'avatar_url': 'https://avatars.githubusercontent.com/danilovex',
        'phrase': 'Hoje é Dia de MALDADE!'
      }
    ];

    TestBed.configureTestingModule({
      declarations: [ UserComponent ], // declare the test component
      providers: [
        { provide: UserService, useValue: users }
      ]
    });

    fixture = TestBed.createComponent(UserComponent);

    comp = fixture.componentInstance; // UserComponent test instance

    // UserService actually injected into the component
    userService = fixture.debugElement.injector.get(UserService);

    userService = TestBed.get(UserService);

    // query for the title <h1> by CSS element selector
    // de = fixture.debugElement.query(By.css('h1'));
    // el = de.nativeElement;
  });

  it('should display a different test title', () => {

  });

});
