import "./GameLetter.css";

function GameLetter({ letter, status }) {
  const className = status ? `letter-box letter-box--${status}` : "letter-box";
  return <span className={className}>{letter}</span>;
}
export default GameLetter;
