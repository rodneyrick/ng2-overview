import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { LoginSectionComponent } from './login-section.component';
import { loginRouting } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    loginRouting
  ],
  declarations: [ LoginSectionComponent, LoginComponent ],
  // exports: [ ],
  // providers: [ UserService ]
})
export class LoginModule { }
