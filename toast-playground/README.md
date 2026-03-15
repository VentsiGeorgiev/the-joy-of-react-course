# Toast Playground

A small React + Vite playground for building and testing a custom toast notification system.

## Overview

This project lets you create toast messages through a simple form and preview how different toast variants behave in the UI.

Each toast:
- is created from the form submit action
- appears in the top-right corner of the screen
- is added with the newest message on top
- can be dismissed manually
- disappears automatically after 10 seconds
- shows a small animated timer bar for the remaining lifetime

## Variants

The playground currently supports four toast variants:

- `Notice` - blue
- `Warning` - orange
- `Success` - green
- `Error` - yellow

## Project Structure

Main toast-related files live in [`src/components/Toast`](/d:/2026-code/the-joy-of-react-course/toast-playground/src/components/Toast):

- [`ToastPlayground/ToastPlayground.jsx`](/d:/2026-code/the-joy-of-react-course/toast-playground/src/components/Toast/ToastPlayground/ToastPlayground.jsx) wires the provider, message list, and form together
- [`ToastForm/ToastForm.jsx`](/d:/2026-code/the-joy-of-react-course/toast-playground/src/components/Toast/ToastForm/ToastForm.jsx) handles the message form and submit logic
- [`ToastMessage/ToastMessage.jsx`](/d:/2026-code/the-joy-of-react-course/toast-playground/src/components/Toast/ToastMessage/ToastMessage.jsx) renders active toast notifications
- [`RadioInput/RadioInput.jsx`](/d:/2026-code/the-joy-of-react-course/toast-playground/src/components/Toast/RadioInput/RadioInput.jsx) renders the variant selector
- [`context/ToasterContext.jsx`](/d:/2026-code/the-joy-of-react-course/toast-playground/src/components/Toast/context/ToasterContext.jsx) stores toast state and auto-dismiss logic
- [`context/useToaster.js`](/d:/2026-code/the-joy-of-react-course/toast-playground/src/components/Toast/context/useToaster.js) exposes the custom hook for consuming toast state

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL shown in the terminal and try creating toast messages from the form.

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Builds the app for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint for the project.

## Notes

- The project uses React context to share toast state across components.
- Auto-dismiss timing is managed in the toast provider.
- Styling is done with CSS Modules for component-level isolation.
