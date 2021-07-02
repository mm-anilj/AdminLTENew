import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Employee } from './employee';
import { EMPLOYEE } from './mock-employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  static nextCrisisId = 100;
  private employes$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>(EMPLOYEE);

  constructor(private messageService: MessageService) { }

  getCrises() { return this.employes$; }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(employes => employes.find(employee => employee.id === +id))
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      // tslint:disable-next-line:prefer-const
      let employee = { id: EmployeeService.nextCrisisId++, name };
      EMPLOYEE.push(employee);
      this.employes$.next(EMPLOYEE);
    }
  }
  }

