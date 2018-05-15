import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, PeopleModule.forRoot(), AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
