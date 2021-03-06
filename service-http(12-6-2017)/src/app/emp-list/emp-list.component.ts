import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-emp-list',
  template: `<h2> Employee-Deatils</h2>
             <h3> {{errorMsg}}</h3>
            <ul *ngFor="let employee of employees">
            <li>{{employee.name}}</li>
            
            </ul>`,
            providers: [EmployeeService]
})
export class EmpListComponent implements OnInit {

employees=[];
errorMsg:string;
  constructor(private _employeeservice:EmployeeService) {

   }

  ngOnInit() {
  console.log("this is employee list");
  this._employeeservice.getEmployees()
  .subscribe(resEmployeeData => this.employees = resEmployeeData,resEmployeeError => this.errorMsg = resEmployeeError);
  }

}
