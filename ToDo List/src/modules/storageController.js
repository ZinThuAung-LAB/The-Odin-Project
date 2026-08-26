import { Project } from "./Project.js";
import { Todo } from "./Todo.js";

const STORAGE_KEY = "todoAppProjects";

export const storageController = {
  // Save current projects array to localStorage
  saveProjects(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  },

  // Retrieve projects array from localStorage
  loadProjects() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null; // Return null if nothing is stored yet

    try {
      const rawProjects = JSON.parse(data);

      // Re-hydrate plain JSON objects back into proper Project & Todo instances
      return rawProjects.map((rawProj) => {
        const project = new Project(rawProj.name);
        project.id = rawProj.id; // Retain original ID

        project.todos = rawProj.todos.map((rawTodo) => {
          const todo = new Todo(
            rawTodo.title,
            rawTodo.description,
            rawTodo.dueDate,
            rawTodo.priority,
            rawTodo.notes,
            rawTodo.completed,
          );
          todo.id = rawTodo.id; // Retain original ID
          return todo;
        });

        return project;
      });
    } catch (e) {
      console.error("Failed to parse projects from localStorage:", e);
      return null;
    }
  },
};
