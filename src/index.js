import { createTodo } from "./todo";
import { createProject } from "./project";

const newTask = createTodo('Hello', 'greet some1', '2025-06-29', 'medium')

console.log(newTask);

const myProject = createProject('MyProject');

console.log(myProject);