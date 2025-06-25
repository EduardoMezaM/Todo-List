export function createProject(name) {
  const todos = [];

  return {
    name,
    addTodo(todo) {
      if (typeof todo !== 'object' || !todo.title) {
        throw new Error('Invalid todo: must be an object with a title');
      }
      todos.push(todo);
    },
    removeTodo(index) {
      todos.splice(index, 1);
    },
    getTodos() {
      return todos;
    },
  };
}
