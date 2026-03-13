import { useState } from "react";
import { getFreshWords, getRandomWord } from "../../data/data";
import "./Game.css";
import GameWord from "../GameWord/GameWord";
import GameForm from "../GameForm/GameForm";
import GameOverCard from "../GameOverCard/GameOverCard";

function Game() {
  const [words, setWords] = useState(getFreshWords);
  const [answer, setAnswer] = useState(getRandomWord);
  const [attempts, setAttempts] = useState(0);

  const currentWord = words[attempts];
  const hasCurrentGuess = currentWord?.letters.some((letter) => letter !== "");
  const isGuessed = hasCurrentGuess && currentWord.letters.join("") === answer;
  const isLastAttempt = attempts === words.length - 1;
  const isGameOver = isGuessed || (isLastAttempt && hasCurrentGuess);

  const handleGuess = (guess) => {
    const lettersArray = guess.split("");
    const updated = words.map((word) =>
      word.attempt === attempts ? { ...word, letters: lettersArray } : word,
    );

    setWords(updated);

    if (guess === answer) {
      return;
    }
    if (isLastAttempt) {
      return;
    }

    setAttempts((prev) => prev + 1);
  };

  const handleStartNewGame = () => {
    setWords(getFreshWords);
    setAttempts(0);
    setAnswer(getRandomWord());
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
          <GameOverCard
            isGuessed={isGuessed}
            answer={answer}
            handleStartNewGame={handleStartNewGame}
          />
        )}
      </section>
    </main>
  );
}
export default Game;
