export const getLetterStatuses = (letters, answer) => {
  const statuses = Array(letters.length).fill("no-exist");
  const answerLetters = answer.split("");

  letters.forEach((letter, index) => {
    if (letter === answerLetters[index]) {
      statuses[index] = "match";
      answerLetters[index] = null;
    }
  });

  letters.forEach((letter, index) => {
    if (statuses[index] === "match") return;

    const foundIndex = answerLetters.indexOf(letter);

    if (foundIndex !== -1) {
      statuses[index] = "exists";
      answerLetters[foundIndex] = null;
    }
  });

  return statuses;
};
