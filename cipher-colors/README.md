# Cipher Colors

Crack the 4-colour secret code — a Mastermind-inspired puzzle game built with React and Vite.

## How to Play

1. A secret combination of **4 unique colours** is randomly generated from **6 colours** (Red, Orange, Yellow, Green, Blue, Purple).
2. Click colours in the palette to fill the 4 guess slots (no duplicate colours per guess).
3. Click **Submit Guess** to see your feedback:
   - 🎯 **Correct position** — right colour in the right slot.
   - 🔄 **Wrong position** — right colour in a different slot.
4. Solve the code within **8 attempts** to win, or see the secret revealed if you run out of attempts.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — Start the Vite dev server
- `npm run build` — Build for production (`dist/`)
- `npm run preview` — Preview the production build
- `npm run lint` — Lint with Oxlint

## Source Overview

- `src/constants.js` — 6-colour palette, `CODE_LENGTH` (`4`), and `MAX_ATTEMPTS` (`8`)
- `src/gameLogic.js` — `generateSecret()` (Fisher–Yates shuffle) and `evaluateGuess()` (`O(n)` Set lookup)
- `src/App.jsx` — Game state (`secret`, `currGuess`, `history`, `status`) and handlers
- `src/components/` — `GameHeader`, `AttemptHistory`, `AttemptRow`, `GuessSlots`, `ColorPalette`, `GameStatus`
