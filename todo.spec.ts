import { addTodo, todos } from "./todo";

describe("addTodo function", () => {
  beforeEach(() => {
    todos.length = 0;
  });

  it("should add a new todo item", () => {
    console.log("Before adding a todo:", todos);

    const todo = addTodo("Learn Jasmine");

    console.log("After adding a todo:", todos);
    console.log("New todo added:", todo);

    expect(todo.id).toBe(1);
    expect(todo.title).toBe("Learn Jasmine");
    expect(todo.completed).toBe(false);
    expect(todos.length).toBe(1);
  });
});
