import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
  name = 'Juri';

  getPerson(): any {
    return {
      name: this.name,
      age: 31
    };
  }
}
