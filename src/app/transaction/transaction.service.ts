import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { TransactionS } from './transaction';
import { Trane } from './mock-transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  static nextCrisisId = 100;
  private trane$: BehaviorSubject<TransactionS[]> = new BehaviorSubject<TransactionS[]>(Trane);

  constructor(private messageService: MessageService) { }

  getCrises() { return this.trane$; }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(trane => trane.find(transaction => transaction.id === +id))
    );
  }

  addCrisis(name: string, status: string, EMPNO: string, SDate: string, PDate: string) {
    name = name.trim();
    status = status.trim();
    EMPNO = EMPNO.trim();
    SDate = SDate.trim();
    PDate = PDate.trim();
    if (name) {
      // tslint:disable-next-line:prefer-const
      let transaction = { id: TransactionService.nextCrisisId++, name , status, EMPNO, SDate, PDate};
      Trane.push(transaction);
      this.trane$.next(Trane);
    }
  }
}
