import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { PersonComponent } from './person.component';

const loggerFactory = () => {
  return new LoggerService(false);
};

@NgModule({
  declarations: [AppComponent, PersonComponent],
  imports: [BrowserModule],
  providers: [{ provide: LoggerService, useFactory: loggerFactory }],
  bootstrap: [AppComponent]
})
export class AppModule {}
