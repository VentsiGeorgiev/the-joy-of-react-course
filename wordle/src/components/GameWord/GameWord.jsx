import GameLetter from "../GameLetter/GameLetter";
import "./GameWord.css";

function GameWord({ word, answer }) {
  const { letters } = word;
  const answerArray = answer[0].split("");

  return (
    <div className="word-wrapper">
      {letters.map((letter, index) => {
        let status = "";
        if (letters.some((letter) => letter !== "")) {
          if (letter === answerArray[index]) {
            status = "match";
          } else if (answerArray.includes(letter)) {
            status = "exists";
          } else {
            status = "no-exist";
          }
        }

        return <GameLetter letter={letter} key={index} status={status} />;
      })}
    </div>
  );
}
export default GameWord;
