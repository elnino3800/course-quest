import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Course} from "../course";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html'
})
export class CourseFormComponent implements OnInit, OnChanges {

  @Input() course: Course | undefined;

  @Output('submit') submitEmitter = new EventEmitter<Course>();

  ngOnInit(): void {
    console.log(this.course);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  submit(form: NgForm) {
    if(form.invalid){
      return
    }

    this.submitEmitter.emit(this.course);
  }
}
