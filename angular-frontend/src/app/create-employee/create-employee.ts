import { Component } from '@angular/core';
import { Employee } from '../employee'
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css'
})

export class CreateEmployee {

  employee: Employee = new Employee;

  constructor() {}

  ngOnInit(): void {
    }

  onSubmit(){
    console.log(this.employee)
    }
}
