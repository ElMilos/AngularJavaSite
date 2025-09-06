import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { HttpClientModule} from '@angular/common/http'
import { CreateEmployee } from './create-employee/create-employee';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
      EmployeeList,
      HttpClientModule,
      RouterLink,
      RouterLinkActive,
      CreateEmployee
      ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = ('angular-frontend');
}
