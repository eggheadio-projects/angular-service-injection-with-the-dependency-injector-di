import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
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

  addPerson(name) {
    this.people.push({
      name
    });
  }
}
