import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeCenterHomeComponent } from './employee-center-home/employee-center-home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCenterComponent } from './employee-center/employee-center.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { EmployeeDetailResolverService } from './employee-detail-resolver.service';

const EmployeeCenterRoutes: Routes = [
  {
    path: '',
    component: EmployeeCenterComponent,
    children: [
      {
        path: '',
        component: EmployeeListComponent,
        children: [
          {
            path: ':id',
            component: EmployeeDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              employee: EmployeeDetailResolverService
            }
          },
          {
            path: '',
            component: EmployeeCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(EmployeeCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeCenterRoutingModule { }
