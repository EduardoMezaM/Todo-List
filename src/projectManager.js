import { createProject } from "./project";

export const projectManager = (function(){
    let projects = [createProject('Inbox')];
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