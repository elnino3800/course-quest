import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../courses.service";
import {Course} from "../course";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
})
export class CourseDetailComponent  {

  item: Course | undefined;

  private id: number;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {
    this.id = Number(route.snapshot.paramMap.get('id'));

    coursesService.get(this.id)
      .subscribe(value => {
        this.item = value;
      })
  }

}
