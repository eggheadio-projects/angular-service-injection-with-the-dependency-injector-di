import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Services</h1>
    <pre>{{ people | json }}</pre>
  `
})
export class AppComponent {
  people;
  constructor() {
    const peopleService = new PeopleService();
    this.people = peopleService.getPeople();
  }
}
