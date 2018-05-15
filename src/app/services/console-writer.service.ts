import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleWriter {
  public write(msg: string) {
    console.log(msg);
  }
}
