import { Injectable } from '@angular/core';
import { PeopleService } from './people.service';

@Injectable()
export class WomanService extends PeopleService {
  constructor() {}

  getPerson() {
    const person = super.getPerson();
    person.name = 'Katie';
    person.gender = 'F';
    return person;
  }
}
