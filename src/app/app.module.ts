import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { PersonComponent } from './person.component';
import { ConsoleWriter } from './services/console-writer.service';

const loggerFactory = (writer: ConsoleWriter) => {
  return new LoggerService(true, writer);
};

@NgModule({
  declarations: [AppComponent, PersonComponent],
  imports: [BrowserModule],
  providers: [
    ConsoleWriter,
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [ConsoleWriter]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
