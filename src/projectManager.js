import { createProject } from "./project";
import { createTodo } from "./todo";

export const projectManager = (function(){

    const Inbox = createProject('Inbox');
    Inbox.addTodo(createTodo('This is my todo app', 'Mark as done or delete it', '', 'low', false));
    Inbox.addTodo(createTodo('Create Project', 'Create your new Project and add todos', '', 'normal', false));
    Inbox.addTodo(createTodo('The Colors', 'Colors show the urgency of the todo', '', 'high', false));
    

    let projects = [Inbox];
    let currentProj = projects[0];

    return{
        addProject(project){
            projects.push(project);
        },
        removeProject(index) {
            if (projects.length === 1) {
                alert("You must have at least one project.");
                return;
            }
            const isCurrent = projects[index] === currentProj;
            projects.splice(index, 1);
            
            if (isCurrent) {
                if (projects[index]) {
                    currentProj = projects[index];
                } else if (projects[index - 1]) {
                    currentProj = projects[index - 1];
                } else {
                    currentProj = projects[0] || null;
                }
            }
        },
        getCurrentProject(){
            return currentProj;
        },
        setCurrentProject(index){
            currentProj = projects[index];
        },
        getAllProjects(){
            return projects;
        }
    };
})();