import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
import { UserService } from './user.service';

import { UserSectionComponent } from './user-section.component';

import { userRouting } from './user.routing';

@NgModule({
  imports: [ CommonModule, userRouting ],
  declarations: [ UserComponent, UserDetailComponent, UserSectionComponent ],
  // exports: [ ],
  providers: [ UserService ]
})
export class UserModule { }