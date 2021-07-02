import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeCenterHomeComponent } from './employee-center-home/employee-center-home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCenterComponent } from './employee-center/employee-center.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeCenterRoutingModule } from './employee-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeCenterRoutingModule
  ],
  declarations: [
    EmployeeCenterComponent,
    EmployeeListComponent,
    EmployeeCenterHomeComponent,
    EmployeeDetailComponent
  ]
})
export class EmployeeCenterModule {}
