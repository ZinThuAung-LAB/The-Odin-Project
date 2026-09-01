import { Project } from "../models/Project.js";

const STORAGE_KEY = "study_flashcards_app_state_v1";

/**
 * StorageController Service
 * Handles persistence and CRITICAL RE-HYDRATION of plain JSON into OOP class instances.
 */
export class StorageController {
  /**
   * Saves the list of projects and the currently active project ID into localStorage.
   * @param {Project[]} projects - Array of Project class instances
   * @param {string|null} activeProjectId - The ID of the currently selected project
   */
  static save(projects, activeProjectId) {
    try {
      const payload = {
        version: 1,
        activeProjectId: activeProjectId || null,
        projects: projects.map((project) => project.toJSON()),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.error(
        "StorageController: Failed to save to localStorage:",
        error,
      );
    }
  }

  /**
   * Loads raw JSON data from localStorage and reconstructs true Project and Flashcard instances.
   * @returns {{ projects: Project[], activeProjectId: string | null } | null}
   */
  static load() {
    try {
      const rawData = localStorage.getItem(STORAGE_KEY);
      if (!rawData) {
        return null;
      }

      const parsed = JSON.parse(rawData);
      if (!parsed || !Array.isArray(parsed.projects)) {
        return null;
      }

      // CRITICAL RE-HYDRATION: Reconstruct instances of Project and Flashcard classes
      const projects = parsed.projects.map((rawProject) =>
        Project.fromJSON(rawProject),
      );

      return {
        projects,
        activeProjectId:
          parsed.activeProjectId ||
          (projects.length > 0 ? projects[0].id : null),
      };
    } catch (error) {
      console.error(
        "StorageController: Failed to load from localStorage. Returning fallback.",
        error,
      );
      return null;
    }
  }

  /**
   * Returns a seeded default project when no previous data exists in localStorage.
   * @returns {Project[]}
   */
  static getSeedData() {
    const defaultProject = new Project({
      name: "JavaScript Basics & TOP Essentials",
      description:
        "Core concepts, closures, DOM manipulation, and prototypal inheritance.",
    });

    defaultProject.addCard(
      "What is a Closure in JavaScript and why is it useful?",
      "A closure is the combination of a function bundled together (enclosed) with references to its lexical environment. It gives inner functions access to outer function scope even after the outer function has executed, enabling data privacy and factory functions.",
      "medium",
    );

    defaultProject.addCard(
      "What is the difference between `null` and `undefined`?",
      "`undefined` means a variable has been declared but not yet assigned a value (or a function has no explicit return). `null` is an intentional assignment representing the explicit absence of any object value.",
      "easy",
    );

    defaultProject.addCard(
      "How does Prototypal Inheritance work in JavaScript?",
      "Objects in JavaScript have an internal link to another object called their prototype. When accessing a property/method not found on the object itself, JS traverses up the prototype chain until it finds the property or reaches `null`.",
      "hard",
    );

    const webApisProject = new Project({
      name: "Modern Web APIs & Architecture",
      description:
        "Fetch API, Web Storage, Event Delegation, and Webpack concepts.",
    });

    webApisProject.addCard(
      "What is Event Delegation and what problem does it solve?",
      "Event delegation is a pattern of attaching a single event listener to a parent element instead of multiple listeners to child elements. It leverages event bubbling to handle dynamic elements efficiently with less memory overhead.",
      "medium",
    );

    webApisProject.addCard(
      "Why is Re-hydration necessary when using localStorage with OOP classes?",
      "JSON.stringify() only stores plain data attributes and strips class methods/prototypes. When JSON.parse() runs, it returns plain Objects. Re-hydration explicitly passes this data into class constructors (e.g. `new Flashcard()`) to restore methods like `.toggleMastered()`.",
      "hard",
    );

    return [defaultProject, webApisProject];
  }

  /**
   * Clears all stored data from localStorage.
   */
  static clear() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("StorageController: Failed to clear storage:", error);
    }
  }
}
