import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Employee} from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8082/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
    }

  createEmployee(employee: Employee): Observable<Employee>
  {
  return this.httpClient.post(`${this.baseURL}`, employee)
  }
}
