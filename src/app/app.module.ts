import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { NewLoggerService } from './services/new-logger.service';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [AppComponent, PersonComponent],
  imports: [BrowserModule],
  providers: [
    NewLoggerService,
    { provide: LoggerService, useExisting: NewLoggerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
