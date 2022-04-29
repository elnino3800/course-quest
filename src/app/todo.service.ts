import { Injectable } from '@angular/core';
import {TodoItem} from "./todo-item";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private items: TodoItem[];

  constructor() {
    this.items = [
      new TodoItem('Learn Angular')
    ]
  }

  getItems() {
    return this.items;
  }

  getRemaining() {
    return this.items.filter(value => !value.done).length;
  }

  getTotalCount() {
    return this.items.length;
  }

  removeCompleted() {
    this.items = this.items.filter(value => !value.done);
  }

  add(todo: TodoItem){
    this.items.push(todo);
  }
}
