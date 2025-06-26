import './styles.css';
import { createTodo } from './todo';
import { createProject } from "./project";
import { projectManager } from "./projectManager";
import { renderProjects, renderCurrentProject, setupAddTodo, setupProjectAddButton } from "./ui";


const School = createProject('School');
School.addTodo(createTodo('Do Homework', 'Do your homework!', '', 'low', false));
School.addTodo(createTodo('Study', 'Study for your exam!', '', 'normal', false));
School.addTodo(createTodo('Complete project', 'That project is very important! Get to work!', '', 'high', false));

projectManager.addProject(School);

console.log("All Projects:", projectManager.getAllProjects());
console.log("Current Project:", projectManager.getCurrentProject().name);
console.log("Todos in School project:");
School.getTodos().forEach(todo => console.log(todo));

renderProjects();
renderCurrentProject();
setupProjectAddButton();
setupAddTodo();
