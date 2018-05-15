import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyroute',
  template: `
    <h1>Employees Route</h1>
    <app-people-list><app-people-list>
  `,
  styles: []
})
export class EmployeesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
