import { Scoreboard } from "./Scoreboard";

export function Header({ currentScore, bestScore }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>Memory Card Game</h1>
        <p className="description">
          Get points by clicking on an image, but don't click on any more than
          once!
        </p>
      </div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}
