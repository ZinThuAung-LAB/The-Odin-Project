import { useCallback, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { CardGrid } from "./components/CardGrid";
import "./styles/App.css";

const POKEMON_IDS = [
  1, 4, 7, 25, 39, 52, 133, 143, 150, 151, 12, 94, 3, 6, 9, 16, 19, 27, 35,
  54, 63, 66, 74, 81, 86, 92, 104, 113, 120, 129, 130, 131, 134, 135, 136,
  142, 144, 145, 146, 149,
];
const BEST_SCORE_KEY = "memory-card-game-best-score";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function readBestScore() {
  try {
    const score = Number(window.localStorage.getItem(BEST_SCORE_KEY));
    return Number.isFinite(score) && score > 0 ? score : 0;
  } catch {
    return 0;
  }
}

export function App() {
  const [cards, setCards] = useState([]);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(readBestScore);
  const [streak, setStreak] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isNewBest, setIsNewBest] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCards() {
      setIsLoading(true);
      setLoadError("");
      try {
        const results = await Promise.allSettled(
          POKEMON_IDS.map(async (id) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${id}`,
              { signal: controller.signal },
            );
            if (!response.ok) throw new Error(`Request failed (${response.status})`);
            const data = await response.json();
            const imageUrl = data.sprites.other["official-artwork"].front_default;
            if (!imageUrl) throw new Error(`No artwork for ${data.name}`);
            return { id: data.id, name: data.name.toUpperCase(), imageUrl };
          }),
        );
        if (controller.signal.aborted) return;

        const loadedCards = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);
        if (loadedCards.length === 0) throw new Error("No cards could be loaded.");
        setCards(shuffleArray(loadedCards));
        if (loadedCards.length < POKEMON_IDS.length) {
          setLoadError(`Some cards could not load. Playing with ${loadedCards.length} cards.`);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setLoadError(error.message || "Unable to load cards. Check your connection and retry.");
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    fetchCards();
    return () => controller.abort();
  }, [loadAttempt]);

  const saveBestScore = useCallback((score) => {
    setBestScore(score);
    try {
      window.localStorage.setItem(BEST_SCORE_KEY, String(score));
    } catch {
      // The score remains available for this session if storage is unavailable.
    }
  }, []);

  const handleCardClick = (id) => {
    if (gameOver || isLoading || loadError && cards.length === 0) return;

    if (clickedCardIds.includes(id)) {
      setIsNewBest(false);
      setIsWin(false);
      setGameOver(true);
      setStreak(0);
      return;
    }

    const newScore = currentScore + 1;
    const newClickedIds = [...clickedCardIds, id];
    setCurrentScore(newScore);
    setClickedCardIds(newClickedIds);
    setStreak((previous) => previous + 1);
    if (newScore > bestScore) {
      saveBestScore(newScore);
      setIsNewBest(true);
    } else {
      setIsNewBest(false);
    }

    if (newClickedIds.length === cards.length && cards.length > 0) {
      setIsWin(true);
      setGameOver(true);
    } else {
      setCards((previous) => shuffleArray(previous));
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedCardIds([]);
    setStreak(0);
    setGameOver(false);
    setIsWin(false);
    setIsNewBest(false);
    setCards((previous) => shuffleArray(previous));
  };

  return (
    <main className="app-container">
      <Header currentScore={currentScore} bestScore={bestScore} />

      {streak >= 3 && !gameOver && (
        <p className="streak-message" aria-live="polite">
          🔥 Streak: {streak} in a row!
        </p>
      )}

      {isLoading ? (
        <div className="loading" role="status">Loading cards…</div>
      ) : loadError && cards.length === 0 ? (
        <div className="load-error" role="alert">
          <p>{loadError}</p>
          <button className="restart-btn" onClick={() => setLoadAttempt((count) => count + 1)}>
            Retry
          </button>
        </div>
      ) : (
        <>
          {loadError && <p className="load-notice" role="status">{loadError}</p>}
          <CardGrid cards={cards} onCardClick={handleCardClick} />
        </>
      )}

      {gameOver && (
        <div className="modal-overlay">
          <section
            className={`modal-content ${isWin ? "win" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="game-result-title"
          >
            <h2 id="game-result-title">{isWin ? "🏆 You won!" : "💥 Game over!"}</h2>
            {isNewBest && <div className="new-best-badge">⭐ New best score! ⭐</div>}
            <p className="result-message">
              {isWin
                ? `Incredible memory! You clicked all ${cards.length} cards.`
                : "You clicked the same card twice."}
            </p>
            <div className="final-score">Final score: {currentScore} / {cards.length}</div>
            <button className="restart-btn" onClick={resetGame} autoFocus>
              Play again 🔄
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
