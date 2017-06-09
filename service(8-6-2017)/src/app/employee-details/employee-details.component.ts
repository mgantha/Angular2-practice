import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-employee-details',
  template: `<h3>Employee Details</h3>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}} .{{employee.name}}-{{employee.gender}}</li>
  </ul>`,
   providers: [EmployeeService]
})
export class EmployeeDetailsComponent implements OnInit {

   employees=[];
  constructor(private _employeeService: EmployeeService){

  }
ngOnInit(){
 this.employees=this._employeeService.getEmployees();

}
}
