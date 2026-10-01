import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { CardGrid } from "./components/CardGrid";
import "./styles/App.css";

export function App() {
  const [cards, setCards] = useState([]);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fisher-Yates Shuffle Algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Fetch Pokemon Data on Mount
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const pokemonIds = [1, 4, 7, 25, 39, 52, 133, 143, 150, 151, 12, 94];
        const promises = pokemonIds.map(async (id) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await res.json();
          return {
            id: data.id,
            name: data.name.toUpperCase(),
            imageUrl: data.sprites.other["official-artwork"].front_default,
          };
        });

        const cardData = await Promise.all(promises);
        setCards(shuffleArray(cardData));
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch card data:", error);
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleCardClick = (id) => {
    // Check if card has already been clicked
    if (clickedCardIds.includes(id)) {
      // Game Over: Reset score and clicked items
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setClickedCardIds([]);
    } else {
      // Correct Pick: Increase score and add ID to tracked list
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setClickedCardIds([...clickedCardIds, id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }

    // Shuffle array after every click
    setCards((prevCards) => shuffleArray(prevCards));
  };

  return (
    <div className="app-container">
      <Header currentScore={currentScore} bestScore={bestScore} />
      {isLoading ? (
        <div className="loading">Loading Cards...</div>
      ) : (
        <CardGrid cards={cards} onCardClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;
