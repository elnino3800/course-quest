import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  name = 'Lubos';
  count = 0;

  increment() {
    this.count++;
  }

}
