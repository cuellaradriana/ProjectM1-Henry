class ToDoList {
  constructor() {
    this.toDoList = [];
  }
  addToDo(toDo) {
    this.toDoList.push(toDo);
  }
  removeToDo() {
    this.toDoList.pop();
  }
  getToDos() {
    return this.toDoList;
  }
}

export default ToDoList;
