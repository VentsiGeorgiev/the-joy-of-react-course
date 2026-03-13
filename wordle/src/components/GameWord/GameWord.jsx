import { getLetterStatuses } from "../../utils.js/getLetterStatus";
import GameLetter from "../GameLetter/GameLetter";
import "./GameWord.css";

function GameWord({ word, answer }) {
  const { letters } = word;
  const isPlayedRow = letters.some((letter) => letter !== "");
  const statuses = isPlayedRow ? getLetterStatuses(letters, answer) : [];

  return (
    <div className="word-wrapper">
      {letters.map((letter, index) => (
        <GameLetter
          key={index}
          letter={letter}
          status={statuses[index] || ""}
        />
      ))}
    </div>
  );
}

export default GameWord;
