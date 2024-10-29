type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

let todos: Todo[] = [];

function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}

export { addTodo, todos };


addTodo('Learn Docker');
addTodo('Convert TS to JS');
console.log(todos);
