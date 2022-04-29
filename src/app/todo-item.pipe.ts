import { Pipe, PipeTransform } from '@angular/core';
import {TodoItem} from "./todo-item";

@Pipe({
  name: 'todoItem'
})
export class TodoItemPipe implements PipeTransform {

  constructor() {
  }

  transform(value: TodoItem): string {
    return 'XXX ' + value.text + ' XXX';
  }

}
