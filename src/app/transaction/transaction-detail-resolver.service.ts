
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { TransactionService } from './Transaction.service';
import { TransactionS } from './Transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionDetailResolverService implements Resolve<TransactionS> {
  constructor(private cs: TransactionService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TransactionS> | Observable<never> {
    // tslint:disable-next-line:prefer-const
    let id = route.paramMap.get('id');

    return this.cs.getCrisis(id).pipe(
      take(1),
      mergeMap(Transaction => {
        if (Transaction) {
          return of(Transaction);
        } else { // id not found
          this.router.navigate(['/Transaction-center']);
          return EMPTY;
        }
      })
    );
  }
}
