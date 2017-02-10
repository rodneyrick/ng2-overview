import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ContactComponent ],
  // exports: [ ],
  providers: [ ContactService ]
})
export class ContactModule { }