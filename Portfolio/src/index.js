import "./style.css";
import { projects } from "./js/projectsData";

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = "";

  projects.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-banner">
        <img 
          src="${proj.image}" 
          alt="${proj.title} Preview" 
          class="project-preview-img" 
          onerror="this.style.display='none';"
        />
      </div>
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

// Mailto fallback handler
function initMailtoHandler() {
  document.querySelectorAll('a[href^="mailto:"]').forEach((mailLink) => {
    mailLink.addEventListener("click", () => {
      navigator.clipboard.writeText("zinthuaung.lab@gmail.com");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initMailtoHandler();
});
