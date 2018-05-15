import { Component } from '@angular/core';
import { LoggerService, loggerFactory } from './logger.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Services</h1>
    <app-person></app-person>
  `,
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory('AppComponent')
    }
  ]
})
export class AppComponent {}
