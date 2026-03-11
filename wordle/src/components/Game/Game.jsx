import { useState } from "react";
import { wordsInitialState } from "../../data/data";
import "./Game.css";
import GameWord from "../GameWord/GameWord";
import { answer } from "../../data/data";
import GameForm from "../GameForm/GameForm";

function Game() {
  console.log("answer", answer);
  const [words, setWords] = useState(wordsInitialState);
  const [isGuessed, setIsGuessed] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGuess = (attempt, guess) => {
    const lettersArray = guess.split("");
    const updated = words.map((word) =>
      word.attempt === attempt ? { ...word, letters: lettersArray } : word,
    );
    setWords(updated);
    if (guess === answer[0]) {
      setIsGuessed(true);
      setIsGameOver(true);
    } else if (attempt === 5) {
      setIsGuessed(false);
      setIsGameOver(true);
    }
  };

  const handleStartNewGame = () => {
    setWords(wordsInitialState);
    setIsGuessed(false);
    setIsGameOver(false);
  };

  return (
    <main>
      <section className="game__wrapper">
        {words.map((item) => (
          <GameWord key={item.id} word={item} answer={answer} />
        ))}
        {!isGameOver ? (
          <GameForm handleGuess={handleGuess} />
        ) : (
          <div
            className={`game__card ${isGuessed ? "game__card-win" : "game__card-lost"}`}
          >
            <p className="game__card-title">
              {isGuessed ? "You win!" : "You lost!"}
            </p>
            <p className="game__card-title">Word: {answer}</p>
            <button className="game__card-button" onClick={handleStartNewGame}>
              New game
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
export default Game;
