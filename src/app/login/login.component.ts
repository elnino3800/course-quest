import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user = {} as User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    if(form.invalid){
      return;
    }

    this.userService.login(this.user)
      .subscribe(value => {
        if(value){
          this.router.navigate(['/']);
        }
      })
  }
}
