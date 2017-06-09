import { Component } from '@angular/core';
import {EmployeeService} from './employee.service'

@Component({
  selector: 'app-root',
  template:`<h2>Random Company</h2>
            <app-employee-list></app-employee-list>
            <app-employee-details></app-employee-details>`,
  
})
export class AppComponent {
  
}
