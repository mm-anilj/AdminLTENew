import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { TransactionS } from '../transaction';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  crises$: Observable<TransactionS[]>;
  selectedId: number;
  Status: string;
  EMPNO: string;
  Transaction: TransactionS;
  paramName: string;
  SDate: string;
  PDate: string;

  constructor(
    private service: TransactionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { transaction: TransactionS }) => {
        if (data.transaction !== undefined) {
          this.Status = data.transaction.name;
          this.Transaction = data.transaction;
        } else {
          this.route.queryParams.subscribe(params => {
            this.EMPNO  = params['EMPNO'];
            this.Status  = params['status'];
            this.SDate  = params['SDate'];
            this.PDate  = params['PDate'];
            this.Transaction = this.Transaction;
          });
          return this.Transaction;
        }
      });

    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }
}
