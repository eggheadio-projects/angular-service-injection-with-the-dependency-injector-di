import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { PeopleModule } from '../people/people.module';

@NgModule({
  imports: [CommonModule, PeopleModule, EmployeesRoutingModule],
  declarations: [EmployeesComponent]
})
export class EmployeesModule {}
