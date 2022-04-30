import {Component, OnDestroy} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy{

  // user: User | undefined;
  // private subscription: Subscription;
  user$: Observable<User | undefined>;

  constructor(private userService: UserService) {
    // this.subscription = userService.onUserChange()
    //   .subscribe(value => {
    //     this.user = value;
    //   });

    this.user$ = userService.onUserChange();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  logout() {
    this.userService.logout()
  }
}
