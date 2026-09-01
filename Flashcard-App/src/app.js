import { Project } from "./models/Project.js";
import { StorageController } from "./services/StorageController.js";
import { UIController } from "./ui/UIController.js";

/**
 * StudyApp Orchestrator & State Manager
 * Coordinates Models, Storage Service, and UI Views.
 */
export class StudyApp {
  constructor() {
    /** @type {Project[]} */
    this.projects = [];
    /** @type {string|null} */
    this.activeProjectId = null;
    /** @type {UIController} */
    this.ui = new UIController();
  }

  /**
   * Initializes the application, loads stored data, and binds event listeners.
   */
  init() {
    this.loadState();
    this.ui.initDialogs();
    this.bindEvents();
    this.render();
  }

  /**
   * Loads state from localStorage with fallback seed data for first-time visitors
   */
  loadState() {
    const savedData = StorageController.load();

    if (savedData && savedData.projects.length > 0) {
      this.projects = savedData.projects;
      this.activeProjectId =
        savedData.activeProjectId &&
        this.projects.some((p) => p.id === savedData.activeProjectId)
          ? savedData.activeProjectId
          : this.projects[0].id;
    } else {
      // First load or cleared storage: Seed default sample decks
      this.projects = StorageController.getSeedData();
      this.activeProjectId = this.projects[0].id;
      this.persist();
    }
  }

  /**
   * Saves current state to localStorage
   */
  persist() {
    StorageController.save(this.projects, this.activeProjectId);
  }

  /**
   * Gets the currently selected Project instance
   * @returns {Project|null}
   */
  getActiveProject() {
    return this.projects.find((p) => p.id === this.activeProjectId) || null;
  }

  /**
   * Re-renders sidebar and active project cards view
   */
  render() {
    const activeProject = this.getActiveProject();
    this.ui.renderProjectList(this.projects, this.activeProjectId);
    this.ui.renderActiveProject(activeProject, this.projects);
  }

  /**
   * Helper to persist and re-render in one call
   */
  saveAndRender() {
    this.persist();
    this.render();
  }

  /**
   * Creates a new project and switches to it
   * @param {string} name
   * @param {string} description
   */
  addProject(name, description) {
    const newProject = new Project({ name, description });
    this.projects.push(newProject);
    this.activeProjectId = newProject.id;
    this.saveAndRender();
  }

  /**
   * Removes a project and switches to another active project
   * @param {string} projectId
   */
  deleteProject(projectId) {
    if (this.projects.length <= 1) {
      alert("You must have at least one study project.");
      return;
    }

    const projectToDelete = this.projects.find((p) => p.id === projectId);
    if (!projectToDelete) return;

    const confirmed = confirm(
      `Are you sure you want to delete "${projectToDelete.name}" and all its flashcards?`,
    );
    if (!confirmed) return;

    this.projects = this.projects.filter((p) => p.id !== projectId);

    if (this.activeProjectId === projectId) {
      this.activeProjectId = this.projects[0]?.id ?? null;
    }

    this.saveAndRender();
  }

  /**
   * Changes the currently active project
   * @param {string} projectId
   */
  selectProject(projectId) {
    if (this.activeProjectId === projectId) return;
    this.activeProjectId = projectId;
    this.ui.flipAllCards(false); // Reset flips on project switch
    this.saveAndRender();
  }

  /**
   * Adds a new flashcard to the currently active project
   * @param {string} question
   * @param {string} answer
   * @param {'easy'|'medium'|'hard'} difficulty
   */
  addCard(question, answer, difficulty) {
    const activeProject = this.getActiveProject();
    if (!activeProject) {
      alert("Please select or create a project first.");
      return;
    }

    activeProject.addCard(question, answer, difficulty);
    this.saveAndRender();
  }

  /**
   * Toggles mastery state of a card in the active project
   * @param {string} cardId
   */
  toggleCardMastery(cardId) {
    const activeProject = this.getActiveProject();
    if (!activeProject) return;

    const card = activeProject.getCard(cardId);
    if (card) {
      card.toggleMastered(); // Calls prototype method restored via re-hydration
      this.saveAndRender();
    }
  }

  /**
   * Removes a card from the active project
   * @param {string} cardId
   */
  deleteCard(cardId) {
    const activeProject = this.getActiveProject();
    if (!activeProject) return;

    const confirmed = confirm(
      "Are you sure you want to delete this flashcard?",
    );
    if (!confirmed) return;

    activeProject.removeCard(cardId);
    this.saveAndRender();
  }

  /**
   * Binds all DOM and user interaction events via event delegation
   */
  bindEvents() {
    // 1. Sidebar Project Item Clicks (Delegation)
    if (this.ui.sidebarProjectList) {
      this.ui.sidebarProjectList.addEventListener("click", (e) => {
        const item = e.target.closest(".project-item");
        if (!item) return;

        const projectId = item.dataset.projectId;

        // Check if delete button was clicked
        if (e.target.closest(".delete-project-btn")) {
          e.stopPropagation();
          this.deleteProject(projectId);
          return;
        }

        // Project selection
        this.selectProject(projectId);
      });
    }

    // 2. Open Add Project Modal
    const openProjectModalBtn = document.getElementById(
      "open-project-modal-btn",
    );
    if (openProjectModalBtn) {
      openProjectModalBtn.addEventListener("click", () => {
        this.ui.openProjectModal();
      });
    }

    // 3. New Project Form Submit
    if (this.ui.projectForm) {
      this.ui.projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(this.ui.projectForm);
        const name = formData.get("projectName")?.toString().trim();
        const description = formData.get("projectDesc")?.toString().trim();

        if (!name) return;

        this.addProject(name, description);
        this.ui.closeProjectModal();
      });
    }

    // 4. Cancel Project Modal Button
    const cancelProjectBtn = document.getElementById("cancel-project-btn");
    if (cancelProjectBtn) {
      cancelProjectBtn.addEventListener("click", () => {
        this.ui.closeProjectModal();
      });
    }

    // 5. Open Add Card Modal
    const openCardModalBtn = document.getElementById("open-card-modal-btn");
    const emptyAddCardBtn = document.getElementById("empty-add-card-btn");
    [openCardModalBtn, emptyAddCardBtn].forEach((btn) => {
      if (btn) {
        btn.addEventListener("click", () => {
          this.ui.openCardModal();
        });
      }
    });

    // 6. New Card Form Submit
    if (this.ui.cardForm) {
      this.ui.cardForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(this.ui.cardForm);
        const question = formData.get("cardQuestion")?.toString().trim();
        const answer = formData.get("cardAnswer")?.toString().trim();
        const difficulty =
          formData.get("cardDifficulty")?.toString() || "medium";

        if (!question || !answer) return;

        this.addCard(question, answer, difficulty);
        this.ui.closeCardModal();
      });
    }

    // 7. Cancel Card Modal Button
    const cancelCardBtn = document.getElementById("cancel-card-btn");
    if (cancelCardBtn) {
      cancelCardBtn.addEventListener("click", () => {
        this.ui.closeCardModal();
      });
    }

    // 8. Flashcards Grid Interactions (Flip, Toggle Mastered, Delete via Delegation)
    if (this.ui.cardsGrid) {
      this.ui.cardsGrid.addEventListener("click", (e) => {
        const cardWrapper = e.target.closest(".flashcard-wrapper");
        if (!cardWrapper) return;

        const cardId = cardWrapper.dataset.cardId;
        const innerCard = cardWrapper.querySelector(".flashcard-inner");
        const actionBtn = e.target.closest("[data-action]");

        // Action: Toggle Mastered
        if (actionBtn && actionBtn.dataset.action === "toggle-mastered") {
          e.stopPropagation();
          this.toggleCardMastery(cardId);
          return;
        }

        // Action: Delete Card
        if (actionBtn && actionBtn.dataset.action === "delete") {
          e.stopPropagation();
          this.deleteCard(cardId);
          return;
        }

        // Action: Flip Card (Either clicking flip button or clicking the card body)
        if (innerCard) {
          innerCard.classList.toggle("flipped");
        }
      });

      // Keyboard accessibility: Enter or Space on focused card flips it
      this.ui.cardsGrid.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          const focusedCard = e.target.closest(".flashcard-inner");
          if (focusedCard && !e.target.closest("button")) {
            e.preventDefault();
            focusedCard.classList.toggle("flipped");
          }
        }
      });
    }

    // 9. Filter Buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        this.ui.setActiveFilter(filter);
        this.ui.renderActiveProject(this.getActiveProject(), this.projects);
      });
    });

    // 10. Flip All / Reset Flip Toggle Button
    const flipAllBtn = document.getElementById("flip-all-btn");
    if (flipAllBtn) {
      let allFlipped = false;
      flipAllBtn.addEventListener("click", () => {
        allFlipped = !allFlipped;
        this.ui.flipAllCards(allFlipped);
        flipAllBtn.innerHTML = allFlipped
          ? "↩ Show Questions"
          : "🔄 Flip All Cards";
      });
    }

    // 11. Reset / Seed Demo Data Button
    const resetDataBtn = document.getElementById("reset-demo-data-btn");
    if (resetDataBtn) {
      resetDataBtn.addEventListener("click", () => {
        const confirmed = confirm(
          "Reset app back to default demo projects and flashcards?",
        );
        if (!confirmed) return;
        StorageController.clear();
        this.loadState();
        this.render();
      });
    }
  }
}

// Bootstrap Application on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const app = new StudyApp();
  app.init();
  // Expose to window for debugging or manual testing if needed
  window.__STUDY_APP__ = app;
});
