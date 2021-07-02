import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionCenterHomeComponent } from './transaction-center-home/transaction-center-home.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionCenterComponent } from './transaction-center/transaction-center.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionCenterRoutingModule } from './transaction-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TransactionCenterRoutingModule
  ],
  declarations: [
    TransactionCenterComponent,
    TransactionListComponent,
    TransactionCenterHomeComponent,
    TransactionDetailComponent
  ]
})
export class TransactionCenterModule {}
