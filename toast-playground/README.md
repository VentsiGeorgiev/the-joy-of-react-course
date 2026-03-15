# Toast Playground (React)

A small toast notification playground built with **React** as part of a
learning exercise focused on state management, reusable components, and
UI behavior in modern React apps.

The goal of the project was to practice:

- component composition
- controlled forms
- React context
- custom hooks
- transient UI state
- timed side effects
- small interactive UI patterns

---

## Live Demo

**Live App:**  
[https://toast-playground-lilac.vercel.app/](https://toast-playground-lilac.vercel.app/)

---

## Features

- Create toast messages from a form
- Four toast variants:
  - `Notice` - blue
  - `Warning` - orange
  - `Success` - green
  - `Error` - yellow
- Newest toast appears at the top
- Toasts appear in the top-right corner
- Manual dismiss button
- Auto-dismiss after 10 seconds
- Animated timer bar showing remaining lifetime
- Lightweight entry animation for each new toast

---

## Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS Modules**
- **Vite**
- **Vercel** (deployment)

---

## Project Structure

```text
src
|
|-- components
|   |-- Header
|   `-- Toast
|       |-- context
|       |   |-- ToasterContext.jsx
|       |   `-- useToaster.js
|       |-- RadioInput
|       |-- ToastForm
|       |-- ToastMessage
|       `-- ToastPlayground
|
|-- App.jsx
|-- App.css
|-- index.css
`-- main.jsx
```

---

## Toast Behavior

The toast system uses a shared context provider to manage all active
notifications.

- New toasts are inserted at the start of the array so the latest one is always shown first
- Each toast gets its own timeout when created
- Toasts can be removed either manually or automatically
- Timer cleanup is handled in the provider to avoid stale timeouts

---

## What I Focused On

This project was mainly about improving my understanding of:

- **where shared UI state should live**
- managing temporary UI elements with React context
- connecting form state to global UI feedback
- keeping presentation and state logic separate
- building small polished interactions with simple tools

---

## Possible Future Improvements

- exit animation before toast removal
- pausing the timer on hover
- keyboard accessibility improvements
- toast icons per variant
- swipe-to-dismiss interactions
- unit tests for toast provider behavior

---

## Installation

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Other useful scripts:

```bash
npm run lint
npm run build
npm run preview
```

---

## Author

Built as a React learning project.
