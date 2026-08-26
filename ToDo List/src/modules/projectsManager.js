import { Todo } from "./Todo.js";
import { Project } from "./Project.js";
import { storageController } from "./storageController.js";

export const projectsManager = {
  projects: [],
  currentProject: null,

  init() {
    // Attempt to load saved data from localStorage
    const savedProjects = storageController.loadProjects();

    if (savedProjects && savedProjects.length > 0) {
      this.projects = savedProjects;
    } else {
      // Fallback: Create default project if no data exists
      const defaultProject = new Project("Default");
      this.projects.push(defaultProject);
    }

    this.currentProject = this.projects[0];
  },

  saveState() {
    storageController.saveProjects(this.projects);
  },

  addProject(name) {
    const newProject = new Project(name);
    this.projects.push(newProject);
    this.currentProject = newProject;
    this.saveState(); // 💾 Save
    return newProject;
  },

  selectProject(projectId) {
    const project = this.projects.find((p) => p.id === projectId);
    if (project) this.currentProject = project;
  },

  deleteProject(projectId) {
    this.projects = this.projects.filter((p) => p.id !== projectId);
    if (this.currentProject && this.currentProject.id === projectId) {
      this.currentProject = this.projects[0] || null;
    }
    this.saveState(); // 💾 Save
  },

  addTodoToCurrentProject(title, description, dueDate, priority, notes) {
    if (!this.currentProject) return;
    const todo = new Todo(title, description, dueDate, priority, notes);
    this.currentProject.addTodo(todo);
    this.saveState(); // 💾 Save
    return todo;
  },

  removeTodoFromCurrentProject(todoId) {
    if (!this.currentProject) return;
    this.currentProject.removeTodo(todoId);
    this.saveState(); // 💾 Save
  },
};
