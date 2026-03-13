import { useState } from "react";
import "./GameForm.css";

function GameForm({ handleGuess }) {
  const [guess, setGuess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedGuess = guess.trim();

    if (trimmedGuess.length !== 5) {
      setErrorMessage("Guess must be 5 letters.");
      return;
    }

    setErrorMessage("");
    handleGuess(trimmedGuess);
    setGuess("");
  };
  return (
    <form onSubmit={handleSubmit} className="game-form">
      <label className="game-form__label">
        Enter guess:
        <input
          type="text"
          id="guess"
          name="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase().slice(0, 5))}
          pattern="[A-Za-z]{5}"
          required
          minLength={5}
          maxLength={5}
          className="game-form__input"
        />
      </label>
      {errorMessage && (
        <p className="game-form__error-message">{errorMessage}</p>
      )}
    </form>
  );
}
export default GameForm;
