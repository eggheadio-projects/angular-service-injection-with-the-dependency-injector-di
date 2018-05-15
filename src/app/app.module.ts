import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { PersonEditComponent } from './person-edit.component';
import { ChildComponent } from './child.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonEditComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
