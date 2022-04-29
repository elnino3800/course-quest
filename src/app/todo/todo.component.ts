import { Component } from '@angular/core';
import {TodoItem} from "../todo-item";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {

  items: TodoItem[];

  constructor(private todoService: TodoService) {
    this.items = todoService.getItems()
  }

  getRemaining() {
    return this.todoService.getRemaining();
  }

  getTotalCount() {
    return this.todoService.getTotalCount();
  }

  removeCompleted() {
    this.todoService.removeCompleted();
    this.items = this.todoService.getItems();
  }

  addNewTodoItem(input: HTMLInputElement) {
    if(!input.value){
      return;
    }

    const newTodo = new TodoItem(input.value);
    this.todoService.add(newTodo);
    this.items = this.todoService.getItems();

    input.value = '';
  }

  onToggle(item: TodoItem) {
    this.todoService.onToggle(item);
  }
}
