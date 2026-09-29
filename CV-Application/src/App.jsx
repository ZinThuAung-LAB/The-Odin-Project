import { GeneralInfo } from "./components/generalInfo";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Builder Application</h1>
      </header>
      <main>
        <GeneralInfo />
        <Education />
        <Experience />
      </main>
    </div>
  );
}
