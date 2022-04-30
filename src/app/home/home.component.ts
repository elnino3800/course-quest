import { Component } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  name: string;
  count: number;

  constructor(private localStorageService: LocalStorageService) {
    this.name = localStorageService.get('name') || 'Lubos';
    this.count = localStorageService.get('count') || 0;
  }

  increment() {
    this.count++;
    this.localStorageService.set('count', this.count);
  }

  onNameChange() {
    this.localStorageService.set('name', this.name);
  }
}
