import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { PersonComponent } from './person.component';

const simpleLogger = {
  log(msg: string) {
    console.log(`I'm a simple logger: ${msg}`);
  }
};

@NgModule({
  declarations: [AppComponent, PersonComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: LoggerService,
      useValue: simpleLogger
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
