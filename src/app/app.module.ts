import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleService } from './people.service';
import { PersonComponent } from './person.component';
import { WomanComponent } from './woman.component';
import { WomanService } from './woman.service';

@NgModule({
  declarations: [AppComponent, PersonComponent, WomanComponent],
  imports: [BrowserModule],
  providers: [PeopleService, WomanService],
  bootstrap: [AppComponent]
})
export class AppModule {}
