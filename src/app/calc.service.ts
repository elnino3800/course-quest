import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  add(valueA: number, valueB: number) {
     return valueA + valueB;
  }

  minus(valueA: number, valueB: number) {
    return valueA - valueB;
  }

  multiply(valueA: number, valueB: number) {
    return valueA * valueB;
  }

  divide(valueA: number, valueB: number) {
    return valueA / valueB;
  }
}
