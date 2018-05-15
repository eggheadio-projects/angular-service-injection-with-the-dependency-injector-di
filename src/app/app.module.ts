import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PeopleModule, ContactsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
