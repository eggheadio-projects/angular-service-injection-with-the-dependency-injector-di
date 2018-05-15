import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor(private isEnabled: boolean) {}

  log(msg: string) {
    if (this.isEnabled) {
      console.log(`Logger: ${msg}`);
    }
  }
}
