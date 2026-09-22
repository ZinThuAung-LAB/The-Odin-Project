// Array of projects including StudyDeck Pro based on your screenshot specs
const projects = [
  {
    title: "StudyDeck Pro",
    name: "Flashcard-App",
    image: "./assets/FlashcardApp.JPG",
    description:
      "A custom study app featuring project/deck categorization, interactive 3D card flipping, mastery status tracking, and re-hydrated object state saved via LocalStorage.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Flashcard-App",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Flashcard-App/",
  },
  {
    title: "Todo List",
    name: "Todo List",
    image: "./assets/TodoList.JPG",
    description:
      "A modern task management application featuring dynamic project separation, priority level tags, custom color themes, modal forms, and complete CRUD state logic.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/ToDo%20List",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/ToDo%20List/",
  },
  {
    title: "Restaurant Page",
    name: "Restaurant Page",
    image: "./assets/RestaurantPage.JPG",
    description:
      "A modern, single-page restaurant website featuring dynamic tabbed DOM navigation, scoped component styling, and clean module bundling via Webpack 5.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Restaurant%20Page",
    liveUrl:
      "https://zinthuaung-lab.github.io/The-Odin-Project/Restaurant%20Page/",
  },
  {
    title: "Tic-Tac-Toe",
    name: "Tic-Tac-Toe",
    image: "./assets/TicTacToe.JPG",
    description:
      "An interactive Tic-Tac-Toe game built with modular JavaScript architecture, object encapsulation, state management, and real-time UI turn/win status tracking.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/TicTacToe",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/TicTacToe/",
  },
  {
    title: "Library",
    name: "Library",
    image: "./assets/Library.JPG",
    description:
      "An interactive web application for managing your personal book collection featuring OOP constructors, dynamic card rendering, status toggling, and a modal popup interface.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Library",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Library/",
  },
  {
    title: "Admin Dashboard",
    name: "Admin Dashboard",
    image: "./assets/AdminDashboard.JPG",
    description:
      "A full-featured admin dashboard layout featuring a sidebar navigation, dynamic top header controls, a project grid card section, and sidebar widgets.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Admin%20Dashboard",
    liveUrl:
      "https://zinthuaung-lab.github.io/The-Odin-Project/Admin%20Dashboard/",
  },
  {
    title: "Sign-up Form",
    name: "Sign-up Form",
    image: "./assets/SignUpForm.JPG",
    description:
      "A modern, responsive sign-up form featuring a two-column desktop layout, custom form inputs, floating branding banner, and active focus/error styling.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Sign-Up-Form",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Sign-Up-Form/",
  },
  {
    title: "Calculator",
    name: "Calculator",
    image: "./assets/calculator.JPG",
    description:
      "A sleek, dark-mode web calculator featuring robust mathematical state management, custom scrollable display handling, and automatic scientific notation for extreme numbers.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Calculator",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Calculator/",
  },
  {
    title: "Etch-a-Sketch",
    name: "Etch-a-Sketch",
    image: "./assets/EtchASketch.JPG",
    description:
      "An interactive pixel-drawing grid application supporting dynamic grid sizing, progressive shading (opacity darkening), and custom color effects.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Etch-a-Sketch",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Etch-a-Sketch/",
  },
];

// Dynamic rendering function
function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  projects.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "project-card";

    let bannerHTML = "";

    if (proj.isCustomBanner) {
      bannerHTML = `
        <div class="project-banner study-deck-preview">
          <div class="deck-header-badge">
            <i class="fa-solid fa-bolt"></i>
            <span>${proj.title} <strong style="color: #818cf8; font-weight:400;">PRO</strong></span>
          </div>
          <div class="deck-title-text">${proj.subtitle}</div>
          <div class="deck-stats-pill">
            <span>${proj.cardsCount}</span>
            <span class="deck-progress-text">${proj.masteryText}</span>
          </div>
        </div>
      `;
    } else {
      bannerHTML = `
        <div class="project-banner" style="background-color: ${proj.bgColor}">
          <h3 class="project-banner-title">${proj.title}</h3>
        </div>
      `;
    }

    card.innerHTML = `
      ${bannerHTML}
      <div class="project-info">
        <div class="project-header">
          <span class="project-name">${proj.name}</span>
          <div class="project-links">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <p class="project-description">${proj.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
