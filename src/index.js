import './styles.css';
import { createTodo } from "./todo";
import { createProject } from "./project";
import { projectManager } from "./projectManager";
import { renderProjects, renderCurrentProject, setupAddTodo } from "./ui";
import { setupProjectAddButton } from './ui';


const School = createProject('School');
School.addTodo('Do Homework');
School.addTodo('Study');
School.addTodo('Complete project');

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
