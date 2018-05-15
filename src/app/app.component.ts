import { Component } from '@angular/core';
import { PeopleService } from './people/people.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Services</h1>
    <pre>{{ people | json }}</pre>
    <app-contact-list></app-contact-list>
  `
})
export class AppComponent {
  people;
  constructor(private peopleService: PeopleService) {
    this.people = peopleService.getPeople();
  }
}
