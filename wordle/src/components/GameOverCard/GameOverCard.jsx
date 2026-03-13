import "./GameOverCard.css";

function GameOverCard({ isGuessed, answer, handleStartNewGame }) {
  return (
    <div
      className={`game__card ${isGuessed ? "game__card-win" : "game__card-lost"}`}
    >
      <p className="game__card-title">{isGuessed ? "You win!" : "You lost!"}</p>
      <p className="game__card-title">Word: {answer}</p>
      <button
        type="button"
        className="game__card-button"
        onClick={handleStartNewGame}
      >
        New game
      </button>
    </div>
  );
}
export default GameOverCard;
