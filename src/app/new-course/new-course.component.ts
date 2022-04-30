import { Component} from '@angular/core';
import {Course} from "../course";
import {CoursesService} from "../courses.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html'
})
export class NewCourseComponent {

  item = {} as Course;

  constructor(private courses: CoursesService,
              private router: Router) { }


  submit(form: NgForm) {
    if(form.invalid){
      return
    }

    this.courses.add(this.item)
      .subscribe((id) => {
        this.router.navigate(['/courses', id])
      })
  }
}
