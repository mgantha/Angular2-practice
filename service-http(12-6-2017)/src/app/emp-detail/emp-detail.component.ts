import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  template: `<h1> List of all the employees</h1>
              <h3>{{errorMsg}}</h3>
            <ul *ngFor="let employee of employees">
            <li>{{employee.id}}. {{employee.name}}  -  {{employee.gender}}
            </li>

            </ul>`,
            providers:[EmployeeService]

})
export class EmpDetailComponent implements OnInit {

 
employees=[];
errorMsg:string;
  constructor(private _employeeservice:EmployeeService) {

   }

  ngOnInit() {
console.log("this is detail list");
  this._employeeservice.getEmployees()
  .subscribe(resEmployeeData => this.employees = resEmployeeData,resEmployeeError => this.errorMsg = resEmployeeError);
  }

}
