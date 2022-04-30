import {Component} from '@angular/core';
import {CoursesService} from "../courses.service";
import {Course} from "../course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {

  items: Course[] | undefined;

  constructor(private coursesService: CoursesService) {
    this.reload();
  }

  reload() {
    this.coursesService.getAll()
      .subscribe(value => {
        this.items = value;
      })
  }

}
