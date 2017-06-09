import { Component,OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-employee-list',
  template: `<h1>Employee List</h1>
              <ul *ngFor="let employee of employees">
              <li>{{employee.name}}</li>
              </ul>`,
              providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit{

  employees=[];
  constructor(private _employeeService: EmployeeService){}
ngOnInit(){
 this.employees=this._employeeService.getEmployees();

}

  

 
}
