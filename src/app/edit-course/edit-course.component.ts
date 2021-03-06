import { Component} from '@angular/core';
import {Course} from "../course";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../courses.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
})
export class EditCourseComponent  {

  item: Course | undefined;

  private id: number;

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService,
              private router: Router) {
    this.id = Number(route.snapshot.paramMap.get('id'));

    coursesService.get(this.id)
      .subscribe(value => {
        this.item = value;
      })
  }

  submit(course: Course) {
    this.coursesService.edit(course)
      .subscribe(() => {
        this.router.navigate(['/courses', course.id])
      })
  }
}
