import { Todo } from "./Todo.js";
import { Project } from "./Project.js";

export const projectsManager = {
  projects: [],
  currentProject: null,

  init() {
    const defaultProject = new Project("Default");
    this.projects.push(defaultProject);
    this.currentProject = defaultProject;
  },

  addProject(name) {
    const newProject = new Project(name);
    this.projects.push(newProject);
    this.currentProject = newProject;
    return newProject;
  },

  selectProject(projectId) {
    const project = this.projects.find((p) => p.id === projectId);
    if (project) {
      this.currentProject = project;
    }
  },

  deleteProject(projectId) {
    this.projects = this.projects.filter((p) => p.id !== projectId);
    if (this.currentProject && this.currentProject.id === projectId) {
      this.currentProject = this.projects[0] || null;
    }
  },

  addTodoToCurrentProject(title, description, dueDate, priority, notes) {
    if (!this.currentProject) return;
    const todo = new Todo(title, description, dueDate, priority, notes);
    this.currentProject.addTodo(todo);
    return todo;
  },

  removeTodoFromCurrentProject(todoId) {
    if (!this.currentProject) return;
    this.currentProject.removeTodo(todoId);
  },
};
