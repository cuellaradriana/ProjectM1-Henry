import ToDoList from "../../src/spec.mjs";
let newToDo;

// describe("Demo para probar implementación de clase ToDoList", () => {
//   beforeEach(() => {
//     newToDo = new ToDoList();
//   });
//   //
//   it("ToDoList debe ser una clase", () => {
//     expect(typeof ToDoList.prototype.constructor).toBe("function");
//   });
//   //
//   it("La lista newToDo debe ser una instacia de ToDoList", () => {
//     expect(newToDo instanceof ToDoList).toBeTrue();
//   });
//   //
//   it("ToDoList debería tener un método addToDo() para agregar un elemento a la lista", () => {
//     expect(newToDo.addToDo).toBeDefined();
//   });
//   //
//   it("ToDoList debería tener un método removeToDo() para eliminar un elemento de la lista", () => {
//     expect(newToDo.removeToDo).toBeDefined();
//   });
//   //
//   it("ToDoList debería tener un método getToDos() que me retorne la lista de elementos en un array", () => {
//     expect(newToDo.getToDos).toBeDefined();
//   });
//   //
//   it("El método addToDo() debería agregar un elemento al final de la lista", () => {
//     newToDo.addToDo("repasar clase test");
//     expect(newToDo.toDoList).toContain("repasar clase test");
//   });
//   //
//   it("El método removeToDo() debería eliminar el último elemento de la lista", () => {
//     newToDo.addToDo("repasar clase test");
//     newToDo.addToDo("repasar clase dom");
//     newToDo.addToDo("repasar clase es6");
//     //
//     newToDo.removeToDo();
//     expect(newToDo.toDoList).toEqual([
//       "repasar clase test",
//       "repasar clase dom",
//     ]);
//   });
//   //
//   it("El método getToDos() debería retornarme un array", () => {
//     expect(Array.isArray(newToDo.getToDos())).toBeTrue();
//   });
//   //
//   it("El método getToDos() debería retornarme todos los elementos agregados", () => {
//     newToDo.addToDo("repasar clase test");
//     newToDo.addToDo("repasar clase dom");
//     newToDo.addToDo("repasar clase es6");

//     expect(newToDo.getToDos()).toEqual([...newToDo.toDoList]);
//   });
// });
