import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit(): void{
      this.getEmployees();
    }

  private getEmployees()
  {
    this.employeeService.getEmployeesList().subscribe(data =>
      {
        this.employees = data;})
    }

  updateEmployee(id: number | undefined){
    this.router.navigate(['update-employee', id]);
    }

  deleteEmployee(id: number | undefined) {
    if (id !== undefined) {
      this.employeeService.deleteEmployee(id).subscribe(
        data => this.getEmployees(),
        error => console.log(error)
      );
    } else {
      console.warn('Próba usunięcia pracownika bez id!');
    }
  }

}
