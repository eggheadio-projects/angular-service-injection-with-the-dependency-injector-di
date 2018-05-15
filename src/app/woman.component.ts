import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { WomanService } from './woman.service';

@Component({
  selector: 'app-woman',
  template: `
    <h3>Woman</h3>
    <pre>{{ person | json }}</pre>

    <app-person></app-person>
  `,
  providers: [{ provide: PeopleService, useClass: WomanService }]
})
export class WomanComponent implements OnInit {
  person;

  constructor(private people: PeopleService) {}

  ngOnInit() {
    this.person = this.people.getPerson();
  }
}
