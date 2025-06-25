import './styles.css';
import { createTodo } from './todo';
import { createProject } from "./project";
import { projectManager } from "./projectManager";
import { renderProjects, renderCurrentProject, setupAddTodo, setupProjectAddButton } from "./ui";


const School = createProject('School');
School.addTodo(createTodo('Do Homework', '', '', 'normal', false));
School.addTodo(createTodo('Study', '', '', 'normal', false));
School.addTodo(createTodo('Complete project', '', '', 'normal', false));

projectManager.addProject(School);
projectManager.setCurrentProject(1);

console.log("All Projects:", projectManager.getAllProjects());
console.log("Current Project:", projectManager.getCurrentProject().name);
console.log("Todos in School project:");
School.getTodos().forEach(todo => console.log(todo));

renderProjects();
renderCurrentProject();
setupProjectAddButton();
setupAddTodo();
