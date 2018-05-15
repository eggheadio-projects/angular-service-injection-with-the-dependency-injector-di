import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child component</h3>
  <pre>{{ personService.getPerson() | json }}</pre>

  <app-person-edit></app-person-edit>
  `,
  providers: [PersonService]
})
export class ChildComponent implements OnInit {
  constructor(public personService: PersonService) {}

  ngOnInit() {}
}
