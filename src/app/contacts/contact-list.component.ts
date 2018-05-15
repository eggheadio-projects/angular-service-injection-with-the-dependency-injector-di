import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-contact-list',
  template: `
    <p>
      contact-list works!
    </p>
  `,
  styles: []
})
export class ContactListComponent implements OnInit {
  constructor(private peopleService: PeopleService) {
    console.log(this.peopleService.getPeople());
  }

  ngOnInit() {}
}
