// Import image assets directly so Webpack bundles them into dist/assets/
import flashcardImg from "../assets/FlashcardApp.JPG";
import todoImg from "../assets/TodoList.JPG";
import restaurantImg from "../assets/RestaurantPage.JPG";
import ticTacToeImg from "../assets/TicTacToe.JPG";
import libraryImg from "../assets/Library.JPG";
import adminDashboardImg from "../assets/AdminDashboard.JPG";
import signUpImg from "../assets/SignUpForm.JPG";
import calculatorImg from "../assets/Calculator.JPG";
import etchASketchImg from "../assets/EtchASketch.JPG";

export const projects = [
  {
    title: "StudyDeck Pro",
    name: "Flashcard-App",
    image: flashcardImg,
    description:
      "A custom study app featuring project/deck categorization, interactive 3D card flipping, mastery status tracking, and re-hydrated object state saved via LocalStorage.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Flashcard-App",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Flashcard-App/",
  },
  {
    title: "Todo List",
    name: "Todo List",
    image: todoImg,
    description:
      "A modern task management application featuring dynamic project separation, priority level tags, custom color themes, modal forms, and complete CRUD state logic.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/ToDo%20List",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/ToDo%20List/",
  },
  {
    title: "Restaurant Page",
    name: "Restaurant Page",
    image: restaurantImg,
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
    image: ticTacToeImg,
    description:
      "An interactive Tic-Tac-Toe game built with modular JavaScript architecture, object encapsulation, state management, and real-time UI turn/win status tracking.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/TicTacToe",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/TicTacToe/",
  },
  {
    title: "Library",
    name: "Library",
    image: libraryImg,
    description:
      "An interactive web application for managing your personal book collection featuring OOP constructors, dynamic card rendering, status toggling, and a modal popup interface.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Library",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Library/",
  },
  {
    title: "Admin Dashboard",
    name: "Admin Dashboard",
    image: adminDashboardImg,
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
    image: signUpImg,
    description:
      "A modern, responsive sign-up form featuring a two-column desktop layout, custom form inputs, floating branding banner, and active focus/error styling.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Sign-Up-Form",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Sign-Up-Form/",
  },
  {
    title: "Calculator",
    name: "Calculator",
    image: calculatorImg,
    description:
      "A sleek, dark-mode web calculator featuring robust mathematical state management, custom scrollable display handling, and automatic scientific notation for extreme numbers.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Calculator",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Calculator/",
  },
  {
    title: "Etch-a-Sketch",
    name: "Etch-a-Sketch",
    image: etchASketchImg,
    description:
      "An interactive pixel-drawing grid application supporting dynamic grid sizing, progressive shading (opacity darkening), and custom color effects.",
    githubUrl:
      "https://github.com/ZinThuAung-LAB/The-Odin-Project/tree/main/Etch-a-Sketch",
    liveUrl: "https://zinthuaung-lab.github.io/The-Odin-Project/Etch-a-Sketch/",
  },
];
