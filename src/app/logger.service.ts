import { Injectable } from '@angular/core';

export const loggerFactory = prefix => {
  return () => new LoggerService(prefix);
};

@Injectable()
export class LoggerService {
  constructor(private prefix: string) {}

  log(msg: string) {
    console.log(`Logger (${this.prefix}): ${msg}`);
  }
}
