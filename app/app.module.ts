import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    appRouting,
    ContactModule,
    UserModule,
    LoginModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    // ContactComponent,
    AboutComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}