export const wordsInitialState = [
  { id: 2938, attempt: 0, letters: ["", "", "", "", ""] },
  { id: 2323, attempt: 1, letters: ["", "", "", "", ""] },
  { id: 4542, attempt: 2, letters: ["", "", "", "", ""] },
  { id: 7763, attempt: 3, letters: ["", "", "", "", ""] },
  { id: 8764, attempt: 4, letters: ["", "", "", "", ""] },
  { id: 5655, attempt: 5, letters: ["", "", "", "", ""] },
];

const words = [
  "apple",
  "bread",
  "chair",
  "dream",
  "eagle",
  "flame",
  "grace",
  "house",
  "light",
  "money",
  "night",
  "ocean",
  "plant",
  "river",
  "smile",
  "sweet",
  "table",
  "tiger",
  "train",
  "water",
];

export const answer = words[Math.floor(Math.random() * words.length)]
  .toUpperCase()
  .split(" ");
