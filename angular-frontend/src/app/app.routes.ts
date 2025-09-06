import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployee } from './create-employee/create-employee';

export const routes: Routes = [
  { path: 'employees', component: EmployeeList},
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'create-employee', component: CreateEmployee}
];
