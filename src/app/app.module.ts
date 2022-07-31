import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {EmployeeDetailsComponent} from "./components/employees-dashboard/employee-details/employee-details.component";
import {EmployeeListComponent} from "./components/employees-dashboard/employee-list/employee-list.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {EmployeesComponent} from "./components/employees-dashboard/employees.component";
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
