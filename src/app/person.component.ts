import { Component, OnInit, Optional, SkipSelf, Host } from '@angular/core';
import { LoggerService, loggerFactory } from './logger.service';

@Component({
  selector: 'app-person',
  template: `
    <div style="border:1px;">
      <p *ngIf="logger === null">I don't have a logger</p>
      <button (click)="doLog()">write log</button>
    </div>
  `
  // providers: [
  //   {
  //     provide: LoggerService,
  //     useFactory: loggerFactory('PersonComponent')
  //   }
  // ]
})
export class PersonComponent implements OnInit {
  constructor(
    @SkipSelf()
    // @Host()
    @Optional()
    public logger: LoggerService
  ) {}

  ngOnInit() {}

  doLog() {
    if (this.logger) {
      this.logger.log('Message from PersonComponent');
    } else {
      console.log('sorry, no logger available');
    }
  }
}
