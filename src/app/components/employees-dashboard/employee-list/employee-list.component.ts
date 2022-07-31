import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../shared/models/employee'
import { EmployeeService } from '../../../core/services/employee.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employees: Employee[];
  employee: Employee;

  @Input() public employees: Employee[];
  @Output() public employeeSelected = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

  selectEmployee(emp: Employee) {
    this.employeeSelected.emit(emp);
  }
}
