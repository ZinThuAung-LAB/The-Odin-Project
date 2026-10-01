import "../styles/Scoreboard.css";

export function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-box">
        <span className="score-label">Score:</span>
        <span className="score-value">{currentScore}</span>
      </div>
      <div className="score-box">
        <span className="score-label">Best Score:</span>
        <span className="score-value">{bestScore}</span>
      </div>
    </div>
  );
}
