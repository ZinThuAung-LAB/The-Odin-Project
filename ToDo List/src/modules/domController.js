import { projectsManager } from "./projectsManager.js";

export const domController = {
  // DOM Selectors
  projectsListEl: document.getElementById("projects-list"),
  currentProjectTitleEl: document.getElementById("current-project-title"),
  todosListEl: document.getElementById("todos-list"),
  addProjectBtn: document.getElementById("add-project-btn"),
  addTodoBtn: document.getElementById("add-todo-btn"),

  // Dialog Elements
  dialogEl: document.getElementById("todo-dialog"),
  todoForm: document.getElementById("todo-form"),
  closeDialogBtn: document.getElementById("close-dialog-btn"),

  // Tracking edit state
  editingTodoId: null,

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Switch or Add Projects
    this.projectsListEl.addEventListener("click", (e) => {
      const projectLi = e.target.closest("li[data-project-id]");
      if (projectLi) {
        projectsManager.selectProject(projectLi.dataset.projectId);
        this.render();
      }
    });

    this.addProjectBtn.addEventListener("click", () => {
      const name = prompt("Enter new project name:");
      if (name && name.trim() !== "") {
        projectsManager.addProject(name.trim());
        this.render();
      }
    });

    // Todo Dialog Events
    this.addTodoBtn.addEventListener("click", () => {
      this.editingTodoId = null; // Fresh todo entry mode
      this.todoForm.reset();
      this.dialogEl.showModal();
    });

    this.closeDialogBtn.addEventListener("click", () => {
      this.dialogEl.close();
    });

    // Todo Actions (Delete, Toggle Complete, Expand/Edit)
    this.todosListEl.addEventListener("click", (e) => {
      const card = e.target.closest(".todo-card");
      if (!card) return;

      const todoId = card.dataset.todoId;
      const todo = projectsManager.currentProject.todos.find(
        (t) => t.id === todoId,
      );

      if (e.target.classList.contains("delete-btn")) {
        projectsManager.removeTodoFromCurrentProject(todoId);
        this.render();
      } else if (e.target.classList.contains("checkbox")) {
        todo.toggleComplete();
        this.render();
      } else if (e.target.classList.contains("edit-btn")) {
        this.openEditModal(todo);
      }
    });

    // Handle Form Submit (Create / Edit)
    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("todo-title-input").value;
      const description = document.getElementById("todo-desc-input").value;
      const dueDate = document.getElementById("todo-date-input").value;
      const priority = document.getElementById("todo-priority-input").value;
      const notes = document.getElementById("todo-notes-input").value;

      if (this.editingTodoId) {
        const todo = projectsManager.currentProject.todos.find(
          (t) => t.id === this.editingTodoId,
        );
        todo.updateDetails({ title, description, dueDate, priority, notes });
      } else {
        projectsManager.addTodoToCurrentProject(
          title,
          description,
          dueDate,
          priority,
          notes,
        );
      }

      this.dialogEl.close();
      this.render();
    });
  },

  openEditModal(todo) {
    this.editingTodoId = todo.id;
    document.getElementById("todo-title-input").value = todo.title;
    document.getElementById("todo-desc-input").value = todo.description;
    document.getElementById("todo-date-input").value = todo.dueDate;
    document.getElementById("todo-priority-input").value = todo.priority;
    document.getElementById("todo-notes-input").value = todo.notes;
    this.dialogEl.showModal();
  },

  renderProjects() {
    this.projectsListEl.innerHTML = "";
    projectsManager.projects.forEach((proj) => {
      const li = document.createElement("li");
      li.dataset.projectId = proj.id;
      li.textContent = proj.name;

      if (
        projectsManager.currentProject &&
        proj.id === projectsManager.currentProject.id
      ) {
        li.classList.add("active");
      }
      this.projectsListEl.appendChild(li);
    });
  },

  renderTodos() {
    this.todosListEl.innerHTML = "";
    const activeProj = projectsManager.currentProject;

    if (!activeProj) return;

    this.currentProjectTitleEl.textContent = activeProj.name;

    activeProj.todos.forEach((todo) => {
      const card = document.createElement("li");
      card.classList.add("todo-card", `priority-${todo.priority}`);
      if (todo.completed) card.classList.add("completed");
      card.dataset.todoId = todo.id;

      card.innerHTML = `
        <div class="todo-left">
          <input type="checkbox" class="checkbox" ${todo.completed ? "checked" : ""} />
          <span class="todo-title">${todo.title}</span>
        </div>
        <div class="todo-right">
          <span class="due-date">${todo.getFormattedDate()}</span>
          <button class="edit-btn">Edit/Details</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;

      this.todosListEl.appendChild(card);
    });
  },

  render() {
    this.renderProjects();
    this.renderTodos();
  },
};
