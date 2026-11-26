# Cipher Colors

Crack the 4-colour secret code — a Mastermind-inspired puzzle game built with React and Vite.

## How to Play

1. A secret combination of **4 unique colours** is randomly generated from a palette of **6 colours** (Red, Orange, Yellow, Green, Blue, Purple).
2. Click colours in the palette to fill the 4 guess slots (no duplicate colours per guess).
3. Click **Submit Guess** to receive feedback without revealing *which* slots matched:
   - 🎯 **Correct position** — right colour in the exact right slot.
   - 🔄 **Wrong position** — right colour, but in a different slot.
4. Crack the code within **8 attempts** to win! If you run out of attempts, the secret code is revealed.
5. Click **Play Again** or **Restart Game** at any time to start a fresh round with a new secret.

## Features

- **Fisher–Yates secret generation** (`O(n)`) for unbiased random 4-colour codes.
- **Single-pass guess evaluation** (`O(n)`) using a `Set` lookup.
- **Attempt history** with colour pegs and position-independent feedback badges.
- **Dark theme UI** powered by `:root` CSS custom properties, glowing colour buttons, and subtle pop/slide animations.
- **Instant restart** with full state reset.

## Tech Stack

- **React 19** (`useState` state management & modular components)
- **Vite 8** (dev server & production bundler)
- **Oxlint** (fast linting)
- **CSS3** (custom properties, flexbox, `@keyframes` animations, Google Fonts *Poppins*)

## Project Structure

```text
cipher-colors/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx                # Root state & game loop
    ├── App.css                # Board, pegs, buttons & animations
    ├── index.css              # :root theme variables & page layout
    ├── constants.js           # 6-colour palette, CODE_LENGTH (4), MAX_ATTEMPTS (8)
    ├── gameLogic.js           # generateSecret() & evaluateGuess()
    └── components/
        ├── GameHeader.jsx     # Title, tagline & live attempt counter
        ├── AttemptHistory.jsx # Legend & list of past guesses
        ├── AttemptRow.jsx     # Single attempt row with pegs & feedback
        ├── GuessSlots.jsx     # 4 active guess slots
        ├── ColorPalette.jsx   # 6 colour selector buttons
        └── GameStatus.jsx     # Win/loss banner, secret reveal & Play Again
```

## Getting Started

```bash
cd cipher-colors
npm install
npm run dev
```

Open the local URL shown in your terminal (default: `http://localhost:5173`).

## Available Scripts

Run these inside the `cipher-colors/` directory:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint across the project |
