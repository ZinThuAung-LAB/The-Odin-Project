import { loadHomepage } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./style.css";

const content = document.getElementById("content");
const navButtons = document.querySelectorAll(".nav-btn");

// Clear existing content and render new tab
function switchTab(renderFunction, activeBtnId) {
  content.innerHTML = "";
  content.appendChild(renderFunction());

  // Update active state on nav buttons
  navButtons.forEach((btn) => {
    if (btn.id === activeBtnId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Event Listeners
document.getElementById("home-btn").addEventListener("click", () => {
  switchTab(loadHomepage, "home-btn");
});

document.getElementById("menu-btn").addEventListener("click", () => {
  switchTab(loadMenu, "menu-btn");
});

document.getElementById("contact-btn").addEventListener("click", () => {
  switchTab(loadContact, "contact-btn");
});

// Initial Load
switchTab(loadHomepage, "home-btn");
