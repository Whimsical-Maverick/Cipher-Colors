import GameHeader from "./components/GameHeader"
import { useState } from "react"
import { MAX_ATTEMPTS, CODE_LENGTH, colorPalette } from "./constants"
import GuessSlots from "./components/GuessSlots"
import ColorPalette from "./components/ColorPalette"
import AttemptHistory from "./components/AttemptHistory"
import GameStatus from "./components/GameStatus"
import "./App.css"
import { generateSecret, evaluateGuess } from "./gameLogic"

function App() {
  const colors = colorPalette.map((c) => c.name)
  const [currGuess, setCurrGuess] = useState([])
  const [secret, setSecret] = useState(() => generateSecret(colors, CODE_LENGTH))
  const [history, setHistory] = useState([])
  const [status, setStatus] = useState("playing")

  const onPick = (colorName) => {
    if (status !== "playing") return
    if (currGuess.length === CODE_LENGTH) {
      alert("The slots are already full")
      return
    }
    for (let i = 0; i < currGuess.length; i++) {
      if (currGuess[i] === colorName) {
        alert("This color is already chosen")
        return
      }
    }
    setCurrGuess([...currGuess, colorName])
  }

  const handleSubmit = () => {
    if (status !== "playing" || currGuess.length !== CODE_LENGTH) return
    const feedback = evaluateGuess(secret, currGuess)
    const newHistory = [...history, { guess: currGuess, feedback }]
    if (feedback.correctPosition === CODE_LENGTH) {
      setStatus("Won")
    } else if (newHistory.length >= MAX_ATTEMPTS) {
      setStatus("Lost")
    }
    setHistory(newHistory)
    setCurrGuess([])
  }

  const restartGame = () => {
    setSecret(generateSecret(colors, CODE_LENGTH))
    setCurrGuess([])
    setHistory([])
    setStatus("playing")
  }

  return (
    <div className="game">
      <GameHeader attempt={Math.min(history.length + 1, MAX_ATTEMPTS)} />
      <AttemptHistory history={history} />
      <GameStatus
        status={status}
        attemptsUsed={history.length}
        secret={secret}
        onRestart={restartGame}
      />
      <GuessSlots currGuess={currGuess} />
      <ColorPalette onPick={onPick} disabled={status !== "playing"} />
      <button
        type="button"
        className="submit-btn"
        onClick={handleSubmit}
        disabled={currGuess.length !== CODE_LENGTH || status !== "playing"}
      >
        Submit Guess
      </button>
      <button type="button" className="restart-btn" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  )
}

export default App
