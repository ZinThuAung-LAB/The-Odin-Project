# The Odin Project - Foundations Projects

Welcome to my repository featuring foundational web development projects completed as part of **[The Odin Project](https://www.theodinproject.com/)** curriculum. This repository demonstrates my progress in DOM manipulation, JavaScript logic, CSS layouts (Flexbox & Grid), and responsive UI designs.

---

## 🚀 Projects Overview

| Project | Description | Tech Stack | Live Demo |
| :--- | :--- | :--- | :--- |
| **Calculator** | A sleek, dark-mode web calculator featuring robust mathematical state management, custom scrollable display handling, and automatic scientific notation for extreme numbers. | HTML5, CSS3 (Grid), JS (ES6+) | [Live Preview](https://zinthuaung-lab.github.io/The-Odin-Project/calculator/) |
| **Etch-a-Sketch** | An interactive pixel-drawing grid application supporting dynamic grid sizing, progressive shading (opacity darkening), and custom color effects. | HTML5, CSS3 (Grid), JS (DOM) | [Live Preview](https://zinthuaung-lab.github.io/The-Odin-Project/Etch-a-Sketch/) |
| **Rock-Paper-Scissors** | Classic Rock-Paper-Scissors game featuring an interactive graphical user interface, score tracking, and real-time round outcome displays. | HTML5, CSS3, JS (ES6+) | [Live Preview](https://zinthuaung-lab.github.io/The-Odin-Project/Rock-Paper-Scissor/) |
| **Odin Recipes** | A clean, multi-page HTML recipe website focusing on structured semantic elements, internal linking, and styled layout. | HTML5, CSS3 | [Live Preview](https://zinthuaung-lab.github.io/The-Odin-Project/odin-recipes/) |

---

## 🛠️ Key Features & Concepts Learned

### 🧮 Calculator
- **State & Logic Management:** Handles complex operation chaining, sequential operator inputs, input overwriting post-calculation, and edge cases like division by zero.
- **Dynamic Display & Formatting:** Built a scrollable text display container with custom scrollbar styling to prevent UI overflow, backed by `toExponential()` formatting for large/extreme values.
- **CSS Grid Layout:** Designed a dark-mode user interface using CSS Grid for alignment and interactive states.

### 🎨 Etch-a-Sketch
- **Dynamic CSS Grid Rendering:** Used JavaScript DOM manipulation (`DocumentFragment`) to generate customizable $N \times N$ grids.
- **Sub-Pixel Gap Prevention:** Resolved browser rounding artifacts by applying strict `box-sizing: border-box` and matching container backgrounds.
- **Progressive Opacity Effect:** Leveraged HTML `dataset` attributes to calculate and darken cell opacity incrementally on hover.

### 🎮 Rock-Paper-Scissors
- **UI State Management:** Transitioned game mechanics from console outputs to modern interactive DOM elements.
- **Event Listeners:** Managed user interactions and conditional logic to evaluate dynamic round scores and victory states.

### 🍲 Odin Recipes
- **Semantic HTML Structure:** Built structured web pages using proper headings, lists (`<ol>`, `<ul>`), and clean navigation links.

---

## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ZinThuAung-LAB/git_test.git](https://github.com/ZinThuAung-LAB/git_test.git)
