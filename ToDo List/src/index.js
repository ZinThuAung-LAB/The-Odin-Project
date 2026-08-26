import "./style.css";
import { projectsManager } from "./modules/projectsManager.js";
import { domController } from "./modules/domController.js";
// Initialize core data state
projectsManager.init();
domController.init();

console.log("Webpack bundler & app modules running cleanly!");
