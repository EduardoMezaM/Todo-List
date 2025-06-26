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
    li.textContent = todo.title;
    todoList.appendChild(li);
  });
}

export function setupProjectAddButton() {
  const showFormBtn = document.getElementById('addProjectBtn');
  const form = document.getElementById('projectForm');
  const nameInput = document.getElementById('projectNameInput');

  showFormBtn.addEventListener('click', () => {
    form.style.display = 'block';
    showFormBtn.style.display = 'none';
    nameInput.focus();
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = nameInput.value.trim();
    if (!name) return;

    const newProject = createProject(name);
    projectManager.addProject(newProject);
    projectManager.setCurrentProject(projectManager.getAllProjects().length - 1);

    renderProjects();
    renderCurrentProject();

    nameInput.value = '';
    form.style.display = 'none';
    showFormBtn.style.display = 'inline-block';
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
    
    const description = document.getElementById('todoDescription').value.trim();
    const dueDate = document.getElementById('todoDueDate').value;
    const priority = document.getElementById('todoPriority').value;
    const newTodo = createTodo(title, description, dueDate, priority, false);
    const currentProject = projectManager.getCurrentProject();

    currentProject.addTodo(newTodo);
    renderCurrentProject();
    
    titleInput.value = '';
    document.getElementById('todoDescription').value = '';
    document.getElementById('todoDueDate').value = '';
    document.getElementById('todoPriority').value = 'normal';

    form.style.display = 'none';
    showFormBtn.style.display = 'inline-block';
    
  });
}
