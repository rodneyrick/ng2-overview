import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { UserService } from './user.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ContactComponent ],
  // exports: [ ],
  providers: [ UserService ]
})
export class ContactModule { }