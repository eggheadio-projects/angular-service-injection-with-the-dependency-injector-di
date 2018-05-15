import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
  name = 'Juri';

  getPerson() {
    return {
      name: this.name,
      age: 31
    };
  }

  setPersonName(value) {
    this.name = value;
  }
}
