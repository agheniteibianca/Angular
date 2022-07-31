import { Component, OnInit } from '@angular/core';
import {Employee} from "../../shared/models/employee";
import {EmployeeService} from "../../core/services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employee: Employee;
  public employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployeesList()
      .subscribe((emps: Employee[]) => this.employees = emps);
  }

  selected(employee: any){
    this.employee = employee;
  }
}
