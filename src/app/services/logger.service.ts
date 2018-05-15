import { Injectable } from '@angular/core';
import { ConsoleWriter } from './console-writer.service';

@Injectable()
export class LoggerService {
  constructor(private isEnabled: boolean, private writer: ConsoleWriter) {}

  log(msg: string) {
    if (this.isEnabled) {
      this.writer.write(msg);
    }
  }
}
