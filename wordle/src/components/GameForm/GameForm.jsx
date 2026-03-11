import { useState } from "react";
import "./GameForm.css";

function GameForm({ handleGuess }) {
  const [guess, setGuess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      console.log(guess.length);
      setErrorMessage("The required length of word should be 5 letters");
      return;
    }

    setErrorMessage("");
    setAttempts((prev) => prev + 1);
    handleGuess(attempts, guess);
    setGuess("");
  };
  return (
    <form onSubmit={handleSubmit} className="game-form">
      <label className="game-form__label">
        Enter guess:
        <input
          required
          minLength={5}
          maxLength={5}
          type="text"
          name="guess"
          id="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase().slice(0, 5))}
          disabled={attempts === 6}
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
