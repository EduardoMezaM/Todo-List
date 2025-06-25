import { projectManager } from './projectManager';

export function renderProjects() {
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';

  projectManager.getAllProjects().forEach((project, index) => {
    const li = document.createElement('li');
    li.textContent = project.name;
    li.addEventListener('click', () => {
      projectManager.setCurrentProject(index);
      renderCurrentProject();
    });
    projectList.appendChild(li);
  });
}

export function renderCurrentProject() {
  const project = projectManager.getCurrentProject();
  document.getElementById('projectTitle').textContent = project.name;

  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  project.getTodos().forEach(todo => {
    const li = document.createElement('li');
    li.textContent = typeof todo === 'string' ? todo : todo.title;
    todoList.appendChild(li);
  });
}
