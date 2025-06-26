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
        removeProject(index){
            if(projects[index] === currentProj){
                currentProj = projects[0] || null;
            }
            projects.splice(index, 1)
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