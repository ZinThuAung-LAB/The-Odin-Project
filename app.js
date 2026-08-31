/**
 * Portfolio Projects Database & Controller
 * Built for ZinThuAung-LAB
 */

// 1. Projects Data Structure
const projects = [
  {
    title: "ToDo List",
    description:
      "A comprehensive project planner and task manager featuring task creation, priority leveling, custom list grouping, and data persistence.",
    tech: ["HTML5", "CSS3", "JS (Webpack)", "Local Storage"],
    liveUrl: "./ToDo List/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/ToDo%20List",
    highlights: [
      "Configured custom list separation (projects) and task priority systems",
      "Integrated browser Local Storage for task data persistence across sessions",
      "Bundled code modules cleanly using Webpack development tooling",
    ],
  },
  {
    title: "Restaurant Page",
    description:
      "A modern, single-page restaurant website featuring dynamic tabbed DOM navigation, scoped component styling, and clean modular component loading.",
    tech: ["HTML5", "CSS3", "JS (ES6)", "Webpack 5"],
    liveUrl: "./Restaurant Page/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Restaurant%20Page",
    highlights: [
      "Created dynamic tabbed page navigation using raw DOM manipulation",
      "Constructed a clean modular structure where each page is a separate component",
      "Configured Webpack asset loading for optimized image and stylesheet delivery",
    ],
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "An interactive Tic-Tac-Toe game built with modular JavaScript architecture, object encapsulation, game state monitoring, and dynamic turn displays.",
    tech: ["HTML5", "CSS3 (Grid)", "JS (Modules)"],
    liveUrl: "./TicTacToe/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/TicTacToe",
    highlights: [
      "Encapsulated game logic and grid states using Javascript Factory Functions",
      "Developed a clean, self-cleaning game controller checking win conditions in real-time",
      "Styled a responsive board grid matching user action events instantly",
    ],
  },
  {
    title: "Library App",
    description:
      "An interactive web application for managing your personal book collection featuring OOP constructors, dynamic card state changes, and overlay modal forms.",
    tech: ["HTML5", "CSS3", "JS (OOP & DOM)"],
    liveUrl: "./Library/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Library",
    highlights: [
      "Utilized prototype-linked JavaScript OOP constructors to define dynamic Book objects",
      "Built clean add-book layout overlay modal forms utilizing custom CSS styling",
      "Managed read/unread toggles and book removals mapped to individual DOM identifiers",
    ],
  },
  {
    title: "Admin Dashboard",
    description:
      "A full-featured responsive admin dashboard grid template layout featuring sidebar navigation, dashboard widgets, and user project grids.",
    tech: ["HTML5", "CSS3 (Grid & Flex)"],
    liveUrl: "./Admin Dashboard/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Admin%20Dashboard",
    highlights: [
      "Constructed complex CSS Grid layout dividing side navs, global headers, and widgets",
      "Maintained modular responsiveness down to narrow mobile device viewport widths",
      "Practiced semantic layouts using sectioning, navigation, and custom svg icons",
    ],
  },
  {
    title: "Sign-Up Form",
    description:
      "A modern, responsive landing page featuring a two-column desktop template, custom floating form inputs, and custom validity checks.",
    tech: ["HTML5", "CSS3", "JS (Form Validation)"],
    liveUrl: "./Sign-Up-Form/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Sign-Up-Form",
    highlights: [
      "Configured password match comparison checks running client-side on form submission",
      "Applied modern form field floating label transitions using pure CSS states",
      "Crafted full-bleed backgrounds side-by-side with semantic text branding columns",
    ],
  },
  {
    title: "Calculator",
    description:
      "A sleek, clean web calculator featuring robust mathematical state evaluation, scrollable display windows, and scientific notation.",
    tech: ["HTML5", "CSS3 (Grid)", "JS (ES6+)"],
    liveUrl: "./Calculator/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Calculator",
    highlights: [
      "Designed full operational support for decimal fractions, divisions, and negative integers",
      "Prevented layout overflows by wrapping display contents and rounding extreme values",
      "Integrated window keydown listeners for keypress entries",
    ],
  },
  {
    title: "Etch-A-Sketch",
    description:
      "An interactive pixel-drawing canvas application supporting dynamic grid sizing, random RGB multi-color modes, and opacity ink shading.",
    tech: ["HTML5", "CSS3 (Grid)", "JS (DOM Manipulation)"],
    liveUrl: "./Etch-a-Sketch/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Etch-a-Sketch",
    highlights: [
      "Engineered prompt-driven grid setups generating customized dynamic layouts on the fly",
      "Authored gradual color-opacity increments overlaying drawing pixels by 10% per pass",
      "Fitted clear grids and custom eraser tools to enhance workspace drawing freedom",
    ],
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Classic Rock-Paper-Scissors game featuring a clean graphical interface, user choice panels, and dynamic match summary stats.",
    tech: ["HTML5", "CSS3", "JS (ES6+)"],
    liveUrl: "./Rock-Paper-Scissor/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Rock-Paper-Scissor",
    highlights: [
      "Built reliable mathematical logic resolving computer choices using standard math functions",
      "Created scoring trackers outputting progressive winner updates dynamically",
      "Connected graphical user selection buttons immediately triggering animated score updates",
    ],
  },
  {
    title: "Odin Recipes",
    description:
      "A multi-page HTML recipe site focusing on semantic content markup structures, local anchors, and classic CSS styling elements.",
    tech: ["HTML5", "CSS3"],
    liveUrl: "./odin-recipes/index.html",
    codeUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/odin-recipes",
    highlights: [
      "Established standard layout folders structuring recipe cards and custom navigation links",
      "Demonstrated basic semantic page flows focusing on lists, images, and text scaling",
      "Implemented layout styles without external CSS frameworks to showcase raw CSS logic",
    ],
  },
];

// State Variables
let currentFilter = "All";
let searchQuery = "";

// DOM Elements
const projectGrid = document.getElementById("projects-grid");
const searchInput = document.getElementById("search-input");
const techFilters = document.getElementById("tech-filters");
const totalProjectsCountEl = document.getElementById("stat-total-projects");
const totalTechCountEl = document.getElementById("stat-total-tech");
const jsProjectsCountEl = document.getElementById("stat-js-projects");

// Initialize Portfolio App
function initPortfolio() {
  calculateStats();
  renderFilterButtons();
  renderProjects();

  // Add Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }
}

// 2. Calculate and Display Dynamic Statistics
function calculateStats() {
  // Total projects
  const totalProjects = projects.length;
  if (totalProjectsCountEl) {
    totalProjectsCountEl.textContent = totalProjects;
  }

  // Count unique technologies used
  const allTech = [];
  projects.forEach((p) => {
    p.tech.forEach((t) => {
      const cleanTag = normalizeTechTag(t);
      if (!allTech.includes(cleanTag)) {
        allTech.push(cleanTag);
      }
    });
  });

  if (totalTechCountEl) {
    totalTechCountEl.textContent = allTech.length;
  }

  // Count JS-based projects (any tag containing JS or Webpack or OOP)
  const jsCount = projects.filter((p) =>
    p.tech.some((t) => {
      const lower = t.toLowerCase();
      return (
        lower.includes("js") ||
        lower.includes("javascript") ||
        lower.includes("webpack") ||
        lower.includes("storage")
      );
    }),
  ).length;

  if (jsProjectsCountEl) {
    jsProjectsCountEl.textContent = jsCount;
  }
}

// Helper to normalize tags for statistics counting (e.g. JS variants -> Javascript)
function normalizeTechTag(tag) {
  const t = tag.toLowerCase();
  if (t.includes("html")) return "HTML5";
  if (t.includes("css")) return "CSS3";
  if (t.includes("js") || t.includes("javascript")) return "JavaScript";
  if (t.includes("webpack")) return "Webpack";
  if (t.includes("storage")) return "Local Storage";
  return tag;
}

// 3. Render Tag Filters
function renderFilterButtons() {
  if (!techFilters) return;

  // Gather unique tags (custom short list: HTML5, CSS3, JavaScript, Webpack, All)
  // To keep filters tidy, let's use the main technologies
  const categories = ["All", "JavaScript", "HTML5", "CSS3", "Webpack"];

  techFilters.innerHTML = categories
    .map((cat) => {
      const isActive = cat === currentFilter ? "active" : "";
      return `<button class="filter-btn ${isActive}" data-filter="${cat}">${cat}</button>`;
    })
    .join("");

  // Add click listeners to buttons
  const buttons = techFilters.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Toggle active states
      buttons.forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");

      currentFilter = e.target.getAttribute("data-filter");
      renderProjects();
    });
  });
}

// 4. Handle Real-Time Search Input
function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProjects();
}

// 5. Render Project Grid
function renderProjects() {
  if (!projectGrid) return;

  // Filter projects based on state
  const filteredProjects = projects.filter((project) => {
    // 1. Text Search matches Title, Description, or Tech Stack
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery) ||
      project.description.toLowerCase().includes(searchQuery) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery));

    // 2. Tag Filter matches
    let matchesTag = false;
    if (currentFilter === "All") {
      matchesTag = true;
    } else {
      matchesTag = project.tech.some((t) => {
        const tagLower = t.toLowerCase();
        const filterLower = currentFilter.toLowerCase();
        // Custom matching e.g. "JavaScript" fits "JS (ES6)" or "JS"
        if (filterLower === "javascript") {
          return tagLower.includes("js") || tagLower.includes("javascript");
        }
        return tagLower.includes(filterLower);
      });
    }

    return matchesSearch && matchesTag;
  });

  // Render cards
  if (filteredProjects.length === 0) {
    projectGrid.innerHTML = `
      <div class="no-results">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>No projects found</h3>
        <p>Try refining your search query or filter tags.</p>
      </div>
    `;
    return;
  }

  projectGrid.innerHTML = filteredProjects
    .map((project) => {
      // Generate tech badges
      const techBadges = project.tech
        .map((t) => `<span class="tech-tag">${t}</span>`)
        .join("");

      // Generate features list ("Plus One" feature highlights)
      const highlightItems = project.highlights
        .map((hl) => `<li>${hl}</li>`)
        .join("");

      return `
      <article class="card">
        <div class="card-body">
          <div class="card-header-project">
            <h3 class="card-title">${project.title}</h3>
            <div class="tech-stack">
              ${techBadges}
            </div>
          </div>
          <p class="card-description">${project.description}</p>
          
          <div class="highlights-section">
            <span class="highlights-title">Key Highlights</span>
            <ul class="highlights-list">
              ${highlightItems}
            </ul>
          </div>
        </div>
        
        <div class="card-footer">
          <a href="${project.liveUrl}" class="btn btn-preview" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Preview
          </a>
          <a href="${project.codeUrl}" class="btn btn-source" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            Source Code
          </a>
        </div>
      </article>
    `;
    })
    .join("");
}

// Run initializer
document.addEventListener("DOMContentLoaded", initPortfolio);
