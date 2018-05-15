import { Injectable } from '@angular/core';

export abstract class PeopleService {
  abstract getPeople();
}

@Injectable()
export class AwesomePeopleService {
  people = [
    {
      name: 'Juri'
    },
    {
      name: 'Steffi'
    }
  ];

  getPeople() {
    return this.people;
  }
}
