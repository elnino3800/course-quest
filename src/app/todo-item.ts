export class TodoItem {

  done = false;
  completed: Date | undefined;

  constructor(public text:string) {
  }

}
