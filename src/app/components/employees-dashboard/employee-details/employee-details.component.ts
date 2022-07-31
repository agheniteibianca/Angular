import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from "../../../shared/models/employee";
import {EmployeeService} from "../../../core/services/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  @Input() public employee: Employee;

  constructor(private route: ActivatedRoute, private employeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {

  }

}
