import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionCenterHomeComponent } from './transaction-center-home/transaction-center-home.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionCenterComponent } from './transaction-center/transaction-center.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { TransactionDetailResolverService } from './transaction-detail-resolver.service';

const TransactionCenterRoutes: Routes = [
  {
    path: '',
    component: TransactionCenterComponent,
    children: [
      {
        path: '',
        component: TransactionListComponent,
        children: [
          {
            path: ':id',
            component: TransactionDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              transaction: TransactionDetailResolverService
            }
          },
          {
            path: '',
            component: TransactionCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TransactionCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionCenterRoutingModule { }
