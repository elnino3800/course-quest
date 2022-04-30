import {Component} from '@angular/core';
import {CoursesService} from "../courses.service";
import {Course} from "../course";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalContentComponent} from "../modal-content/modal-content.component";
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {

  items: Course[] | undefined;

  constructor(private coursesService: CoursesService, private modal: NgbModal,
              private local: LocalStorageService) {
    this.reload();
  }

  reload() {
    this.coursesService.getAll()
      .subscribe(value => {
        this.items = value;
      })
  }

  delete(item: Course) {
    if (confirm(`Delete item ${item.name}?`)) {
      this.coursesService.delete(item)
        .subscribe(() => {
          this.reload();
        })
    }
  }

  openModal() {
    const modalRef = this.modal.open(ModalContentComponent);
    modalRef.componentInstance.name = this.local.get('name');

    modalRef.result.then(value => {
      console.log(value)
    }, reason => {
      console.log(reason);
    })
  }
}
