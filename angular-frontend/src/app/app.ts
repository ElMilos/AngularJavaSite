import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
      EmployeeList,
      HttpClientModule
      ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = ('angular-frontend');
}
