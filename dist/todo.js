"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
exports.addTodo = addTodo;
var todos = [];
exports.todos = todos;
function addTodo(title) {
    var newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}
addTodo('Learn Docker');
addTodo('Convert TS to JS');
console.log(todos);
