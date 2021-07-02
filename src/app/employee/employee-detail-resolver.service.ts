
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailResolverService implements Resolve<Employee> {
  constructor(private cs: EmployeeService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee> | Observable<never> {
    // tslint:disable-next-line:prefer-const
    let id = route.paramMap.get('id');

    return this.cs.getCrisis(id).pipe(
      take(1),
      mergeMap(employee => {
        if (employee) {
          return of(employee);
        } else { // id not found
          this.router.navigate(['/Employee-center']);
          return EMPTY;
        }
      })
    );
  }
}
