import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./components/employees-dashboard/employee-details/employee-details.component";
import {EmployeeListComponent} from "./components/employees-dashboard/employee-list/employee-list.component";
import {EmployeesComponent} from "./components/employees-dashboard/employees.component";


const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
