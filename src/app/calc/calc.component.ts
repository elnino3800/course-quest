import { Component} from '@angular/core';
import {CalcService} from "../calc.service";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html'
})
export class CalcComponent {

  valueA = 0;
  valueB = 0;
  result = 0;
  sign = '+';

  constructor(private calcService: CalcService) {
  }

  add() {
    this.result = this.calcService.add(this.valueA, this.valueB);
    this.sign = '+';
  }

  minus() {
    this.result = this.calcService.minus(this.valueA, this.valueB);
    this.sign = '-';
  }

  multiply() {
    this.result = this.calcService.multiply(this.valueA, this.valueB);
    this.sign = '*';
  }

  divide() {
    this.result = this.calcService.divide(this.valueA, this.valueB);
    this.sign = '/';
  }
}
