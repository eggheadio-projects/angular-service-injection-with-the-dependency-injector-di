import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-person',
  template: `
    <div>
    Logging component:
    <button (click)="doLog()">Log to console</button>
  </div>
  `,
  styles: []
})
export class PersonComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit() {}

  doLog() {
    this.logger.log('Message from PersonComponent');
  }
}
