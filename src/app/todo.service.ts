import { Injectable } from '@angular/core';
import {TodoItem} from "./todo-item";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private items: TodoItem[];

  private key = 'todo-items';

  constructor(private localStorageService: LocalStorageService) {
    this.items = localStorageService.get(this.key) || [];
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
    this.localStorageService.set(this.key, this.items);
  }

  add(todo: TodoItem){
    this.items.push(todo);
    this.localStorageService.set(this.key, this.items);
  }

  onToggle(item: TodoItem) {
    item.completed = item.done ? new Date() : undefined;
    this.localStorageService.set(this.key, this.items);
  }
}
