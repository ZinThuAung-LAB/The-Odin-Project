/**
 * UIController
 * Handles all DOM queries, rendering, event delegation, and modal operations.
 */
export class UIController {
  constructor() {
    // Cache DOM Elements
    this.sidebarProjectList = document.getElementById("project-list");
    this.activeProjectTitle = document.getElementById("active-project-title");
    this.activeProjectDescription = document.getElementById(
      "active-project-desc",
    );
    this.activeProjectStats = document.getElementById("active-project-stats");
    this.progressBarFill = document.getElementById("progress-bar-fill");
    this.progressPercentageText = document.getElementById(
      "progress-percentage-text",
    );
    this.cardsGrid = document.getElementById("cards-grid");
    this.emptyState = document.getElementById("empty-cards-state");
    this.cardCountBadge = document.getElementById("header-total-cards");
    this.masteredCountBadge = document.getElementById("header-mastered-cards");

    // Modals & Forms
    this.projectModal = document.getElementById("project-modal");
    this.projectForm = document.getElementById("project-form");
    this.cardModal = document.getElementById("card-modal");
    this.cardForm = document.getElementById("card-form");

    // Filter state
    this.currentFilter = "all"; // 'all' | 'learning' | 'mastered' | 'easy' | 'medium' | 'hard'
  }

  /**
   * Initializes dialog backdrop click-to-close behavior
   */
  initDialogs() {
    [this.projectModal, this.cardModal].forEach((dialog) => {
      if (!dialog) return;
      dialog.addEventListener("click", (e) => {
        const dialogDimensions = dialog.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          dialog.close();
        }
      });
    });
  }

  /**
   * Renders the list of projects in the sidebar
   * @param {import('../models/Project.js').Project[]} projects
   * @param {string|null} activeProjectId
   */
  renderProjectList(projects, activeProjectId) {
    if (!this.sidebarProjectList) return;

    this.sidebarProjectList.innerHTML = "";

    projects.forEach((project) => {
      const isActive = project.id === activeProjectId;
      const li = document.createElement("li");
      li.className = `project-item ${isActive ? "active" : ""}`;
      li.dataset.projectId = project.id;

      li.innerHTML = `
        <button type="button" class="project-select-btn" title="${this.escapeHtml(project.name)}">
          <div class="project-btn-icon">📁</div>
          <div class="project-btn-content">
            <span class="project-name">${this.escapeHtml(project.name)}</span>
            <span class="project-meta">${project.cards.length} cards • ${project.progressPercentage}% mastered</span>
          </div>
        </button>
        ${
          projects.length > 1
            ? `
          <button type="button" class="delete-project-btn" title="Delete Project" aria-label="Delete ${this.escapeHtml(project.name)}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        `
            : ""
        }
      `;

      this.sidebarProjectList.appendChild(li);
    });
  }

  /**
   * Renders the main view for the active project
   * @param {import('../models/Project.js').Project|null} activeProject
   * @param {import('../models/Project.js').Project[]} allProjects
   */
  renderActiveProject(activeProject, allProjects = []) {
    // Update global header stats
    const totalAllCards = allProjects.reduce((acc, p) => acc + p.totalCount, 0);
    const totalAllMastered = allProjects.reduce(
      (acc, p) => acc + p.masteredCount,
      0,
    );

    if (this.cardCountBadge) this.cardCountBadge.textContent = totalAllCards;
    if (this.masteredCountBadge)
      this.masteredCountBadge.textContent = totalAllMastered;

    if (!activeProject) {
      if (this.activeProjectTitle)
        this.activeProjectTitle.textContent = "No Deck Selected";
      if (this.activeProjectDescription)
        this.activeProjectDescription.textContent =
          "Create or select a project from the sidebar.";
      if (this.cardsGrid) this.cardsGrid.innerHTML = "";
      if (this.emptyState) this.emptyState.classList.remove("hidden");
      return;
    }

    // Update active project header
    if (this.activeProjectTitle)
      this.activeProjectTitle.textContent = activeProject.name;
    if (this.activeProjectDescription) {
      this.activeProjectDescription.textContent =
        activeProject.description ||
        "No description provided for this study project.";
    }

    // Update progress bar & stats
    const percentage = activeProject.progressPercentage;
    if (this.progressBarFill)
      this.progressBarFill.style.width = `${percentage}%`;
    if (this.progressPercentageText)
      this.progressPercentageText.textContent = `${percentage}% Mastered`;
    if (this.activeProjectStats) {
      this.activeProjectStats.textContent = `${activeProject.masteredCount} of ${activeProject.totalCount} cards completed`;
    }

    // Filter cards
    let filteredCards = activeProject.cards;
    if (this.currentFilter === "learning") {
      filteredCards = activeProject.cards.filter((c) => !c.mastered);
    } else if (this.currentFilter === "mastered") {
      filteredCards = activeProject.cards.filter((c) => c.mastered);
    } else if (["easy", "medium", "hard"].includes(this.currentFilter)) {
      filteredCards = activeProject.cards.filter(
        (c) => c.difficulty === this.currentFilter,
      );
    }

    // Render cards grid
    if (!this.cardsGrid || !this.emptyState) return;

    this.cardsGrid.innerHTML = "";

    if (filteredCards.length === 0) {
      this.emptyState.classList.remove("hidden");
      const emptyMsg = this.emptyState.querySelector(".empty-message");
      if (emptyMsg) {
        emptyMsg.textContent =
          activeProject.cards.length === 0
            ? "This project does not have any flashcards yet."
            : "No flashcards match the selected filter.";
      }
    } else {
      this.emptyState.classList.add("hidden");
      filteredCards.forEach((card) => {
        const cardElement = this.createCardElement(card);
        this.cardsGrid.appendChild(cardElement);
      });
    }
  }

  /**
   * Creates a modern 3D flippable flashcard DOM element
   * @param {import('../models/Flashcard.js').Flashcard} card
   * @returns {HTMLElement}
   */
  createCardElement(card) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "flashcard-wrapper";
    cardContainer.dataset.cardId = card.id;

    const difficultyLabels = {
      easy: "🟢 Easy",
      medium: "🟡 Medium",
      hard: "🔴 Hard",
    };

    cardContainer.innerHTML = `
      <div class="flashcard-inner ${card.mastered ? "is-mastered" : ""}" tabindex="0" role="region" aria-label="Flashcard: ${this.escapeHtml(card.question)}">
        
        <!-- CARD FRONT -->
        <div class="card-face card-front">
          <div class="card-header">
            <span class="badge badge-difficulty badge-${card.difficulty}">
              ${difficultyLabels[card.difficulty] || card.difficulty}
            </span>
            <span class="badge badge-mastered ${card.mastered ? "active" : ""}">
              ${card.mastered ? "✓ Mastered" : "○ In Learning"}
            </span>
            <span class="flip-hint" title="Click anywhere to flip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
              Flip
            </span>
          </div>

          <div class="card-body">
            <span class="card-label">QUESTION</span>
            <p class="card-text">${this.escapeHtml(card.question)}</p>
          </div>

          <div class="card-footer">
            <button type="button" class="action-btn toggle-mastered-btn ${card.mastered ? "btn-success" : "btn-outline"}" data-action="toggle-mastered">
              ${card.mastered ? "★ Mastered" : "☆ Mark Mastered"}
            </button>
            <div class="footer-right">
              <button type="button" class="icon-btn flip-btn" data-action="flip" title="Flip to answer" aria-label="Flip card">
                ↩ Answer
              </button>
              <button type="button" class="icon-btn delete-card-btn" data-action="delete" title="Delete card" aria-label="Delete card">
                🗑️
              </button>
            </div>
          </div>
        </div>

        <!-- CARD BACK -->
        <div class="card-face card-back">
          <div class="card-header">
            <span class="badge badge-difficulty badge-${card.difficulty}">
              ${difficultyLabels[card.difficulty] || card.difficulty}
            </span>
            <span class="badge badge-answer-label">ANSWER</span>
            <span class="flip-hint" title="Click to flip back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
              Flip Back
            </span>
          </div>

          <div class="card-body">
            <span class="card-label">EXPLANATION</span>
            <p class="card-text">${this.escapeHtml(card.answer)}</p>
          </div>

          <div class="card-footer">
            <button type="button" class="action-btn toggle-mastered-btn ${card.mastered ? "btn-success" : "btn-outline"}" data-action="toggle-mastered">
              ${card.mastered ? "★ Mastered" : "☆ Mark Mastered"}
            </button>
            <div class="footer-right">
              <button type="button" class="icon-btn flip-btn" data-action="flip" title="Flip to question" aria-label="Flip back">
                ↪ Question
              </button>
              <button type="button" class="icon-btn delete-card-btn" data-action="delete" title="Delete card" aria-label="Delete card">
                🗑️
              </button>
            </div>
          </div>
        </div>

      </div>
    `;

    return cardContainer;
  }

  /**
   * Opens the Add Project modal
   */
  openProjectModal() {
    if (this.projectForm) this.projectForm.reset();
    if (this.projectModal) this.projectModal.showModal();
  }

  /**
   * Closes the Add Project modal
   */
  closeProjectModal() {
    if (this.projectModal) this.projectModal.close();
  }

  /**
   * Opens the Add Card modal
   */
  openCardModal() {
    if (this.cardForm) this.cardForm.reset();
    if (this.cardModal) this.cardModal.showModal();
  }

  /**
   * Closes the Add Card modal
   */
  closeCardModal() {
    if (this.cardModal) this.cardModal.close();
  }

  /**
   * Sets the active filter and updates UI pill buttons
   * @param {string} filter
   */
  setActiveFilter(filter) {
    this.currentFilter = filter;
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });
  }

  /**
   * Flips all cards to front or toggles flip all
   * @param {boolean} [forceFlip]
   */
  flipAllCards(forceFlip) {
    const cards = document.querySelectorAll(".flashcard-inner");
    cards.forEach((card) => {
      if (typeof forceFlip === "boolean") {
        card.classList.toggle("flipped", forceFlip);
      } else {
        card.classList.toggle("flipped");
      }
    });
  }

  /**
   * Utility to escape HTML to prevent XSS
   * @param {string} str
   * @returns {string}
   */
  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
