import "./GameLetter.css";

function GameLetter({ letter, status }) {
  return <span className={`letter-box letter-box--${status}`}>{letter}</span>;
}
export default GameLetter;
