# Wordle Clone (React)

A small Wordle-style game built with **React** as part of a learning
exercise while studying modern React state management and component
architecture.

The goal of the project was to practice:

- component design
- state ownership
- controlled inputs
- parent ↔ child data flow
- game logic and algorithms
- handling derived state
- building small interactive UI apps in React

---

## Live Demo

🔗 **Live App:**\
\[[https://the-joy-of-react-course.vercel.app/](https://the-joy-of-react-course.vercel.app/)]

---

## Features

- Random word generated each game
- 6 attempts to guess the word
- Color feedback for each letter:
  - 🟩 correct position
  - 🟨 letter exists in word
  - ⬜ letter not in word
- Correct duplicate-letter handling (Wordle-style algorithm)
- Controlled input with validation
- Reset game functionality
- Clean component architecture

---

## Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS**
- **Vite**
- **Vercel** (deployment)

---

## Project Structure

    src
    │
    ├── components
    │   ├── Game
    │   ├── GameForm
    │   ├── GameLetter
    │   ├── GameWord
    │   ├── GameOverCard
    │   └── Header
    │
    ├── data
    │   └── data.js
    │
    ├── utils
    │   └── getLetterStatuses.js
    │
    └── App.jsx

---

## Game Logic

The letter evaluation uses a **two-pass algorithm** similar to the
original Wordle logic:

1.  First pass:
    - Detect letters that match the correct position (`match`).
2.  Second pass:
    - Detect letters that exist in the word but are in the wrong
      position (`exists`).

This approach correctly handles **duplicate letters**, which is a common
edge case.

---

## What I Focused On

This project was mainly about improving my understanding of:

- **where state should live in React**
- avoiding unnecessary state
- deriving state when possible
- keeping components focused and reusable
- separating rendering from game logic

---

## Possible Future Improvements

Some ideas that could be added later:

- keyboard input (real Wordle style)
- animations for tile reveal
- statistics / win tracking
- accessibility improvements
- unit tests for the letter-evaluation algorithm
- mobile keyboard UX improvements

---

## Installation

Clone the repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

---

## Author

Built as a React learning project.
