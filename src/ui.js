import { projectManager } from './projectManager';
import { createProject } from './project';
import { createTodo } from './todo';

export function renderProjects() {
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';

  projectManager.getAllProjects().forEach((project, index) => {
    const li = document.createElement('li');
    li.textContent = project.name;

    if (projectManager.getCurrentProject() === project) {
      li.classList.add('active-project');
    }

    li.addEventListener('click', () => {
      projectManager.setCurrentProject(index);
      renderProjects();
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

export function setupProjectAddButton() {
  const addBtn = document.getElementById('addProjectBtn');
  addBtn.addEventListener('click', () => {
    const name = prompt('Enter project name:');
    if (!name) return;

    const newProject = createProject(name);
    projectManager.addProject(newProject);
    projectManager.setCurrentProject(projectManager.getAllProjects().length - 1);

    renderProjects();
    renderCurrentProject();
  });
}

export function setupAddTodo() {
  const showFormBtn = document.getElementById('showTodoFormBtn');
  const form = document.getElementById('todoForm');
  const titleInput = document.getElementById('todoTitle');

  showFormBtn.addEventListener('click', () => {
    form.style.display = 'block';
    showFormBtn.style.display = 'none';
    titleInput.focus();
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const title = titleInput.value.trim();
    if (!title) return;

    const newTodo = createTodo(title, '', '', 'normal', false);
    const currentProject = projectManager.getCurrentProject();

    currentProject.addTodo(newTodo);
    renderCurrentProject();

    titleInput.value = '';
    form.style.display = 'none';
    showFormBtn.style.display = 'inline-block';
  });
}
