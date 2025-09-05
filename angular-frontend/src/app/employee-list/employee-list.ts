import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Employee} from "../employee";
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees?: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void{
      this.getEmployees();
    }

  private getEmployees()
  {
    this.employeeService.getEmployeesList().subscribe(data =>
      {
        this.employees = data;})
    }

}
