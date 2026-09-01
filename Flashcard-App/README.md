# ⚡ StudyDeck Pro — Study & Project Flashcard App

A modular, browser-ready flashcard and study deck application built with **Vanilla JavaScript (ES6+ Modules)**, **Object-Oriented Programming (OOP)** principles, and clean separation of concerns.

---

## 🏗️ Architectural Overview

This application demonstrates the **Single Responsibility Principle (SRP)** and modular design patterns:

```
Flashcard-App/
├── index.html                 # Semantic & accessible HTML5 structure (<dialog>, <aside>, <main>)
├── styles.css                 # CSS Grid, Flexbox, custom properties, and 3D card-flip animations
├── src/
│   ├── models/
│   │   ├── Flashcard.js       # Flashcard OOP Model (id, question, answer, toggleMastered, re-hydration)
│   │   └── Project.js         # Project / Deck OOP Model (cards collection, addCard, removeCard)
│   ├── services/
│   │   └── StorageController.js # Persistence layer + CRITICAL Re-hydration of JSON into OOP instances
│   ├── ui/
│   │   └── UIController.js    # DOM queries, event delegation, dialog lifecycle, and card rendering
│   └── app.js                 # Central State Manager & Orchestrator (StudyApp)
└── README.md
```

---

## 🧠 Key Technical Highlights

### 1. Object-Oriented Models & Prototypal Integrity

- `Flashcard`: Manages its own internal state (`mastered`, `difficulty`), exposes `toggleMastered()`.
- `Project`: Maintains an array of `Flashcard` instances and encapsulates card collection mutations (`addCard()`, `removeCard()`, `getCard()`).

### 2. The Critical Re-Hydration Pattern

When saving to `localStorage`, `JSON.stringify()` converts JavaScript objects into raw string data, stripping prototype chains.
`JSON.parse()` restores only plain objects (`{}`), which breaks calls like `card.toggleMastered()`.

**Solution:**
We implement `static fromJSON(raw)` factory methods on both models:

```javascript
// Plain object -> Fully operational class instance with prototype methods
const card = Flashcard.fromJSON(rawCardObject);
card.toggleMastered(); // ✅ Works seamlessly!
```

### 3. Native `<dialog>` Modals & Event Delegation

- Utilizes modern HTML5 `<dialog>` elements with `.showModal()`, backdrop dismissal, and native ESC key handling.
- Uses event delegation on the card container and project list to handle clicks efficiently with minimum event listeners.

### 4. 3D CSS Card Flip

Card flip animations use CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden`).

---

## 🚀 Running the App

### Direct in Browser (Native ES Modules):

Simply open `index.html` via a local dev server (e.g., Live Server in VS Code or `npx serve .`).

### Webpack Build (Optional):

If bundling for production with Webpack:

```bash
npm init -y
npm install --save-dev webpack webpack-cli css-loader style-loader html-webpack-plugin
```

Set `entry: './src/app.js'` in `webpack.config.js`.
