import GameHeader from "./components/GameHeader"
import { useState } from "react"
import { MAX_ATTEMPTS,CODE_LENGTH, colorPalette } from "./constants"
import GuessSlots from "./components/GuessSlots"
import ColorPalette from "./components/ColorPalette"
import "./App.css"
import { generateSecret , evaluateGuess } from "./gameLogic"

function App() {
  const [currGuess,setCurrGuess] = useState([])
  const colors = colorPalette.map((c) => c.name)
  const [secret,setSecret] = useState(() => generateSecret(colors,CODE_LENGTH))
  const [history,setHistory] = useState([])
  const [status,setStatus] = useState("playing")

  const onPick = (colorName) =>{
        if(currGuess.length === CODE_LENGTH)
        {
          alert("The slots are already full")
          return
        }
        else
        {
           for(let i=0;i<currGuess.length;i++)
           {
              if(currGuess[i]===colorName)
              {
                alert("This color is already chosen")
                return
              }
           }
        }
        setCurrGuess([...currGuess,colorName])
   }

  const handleSubmit = () => {
    if(status==="Won")
    {
        alert("Congratulations! You Won")
        return
    }
    if(status==="Lost")
    {
      alert(`Sorry! You Lost ,Better Luck Next Time, The Secret was ${secret}`)
      return
    }
    const feedback = evaluateGuess(secret,currGuess)
    const newHistory = [...history,{"guess" : currGuess,"feedback" : feedback}]
    if(feedback.correctPosition === CODE_LENGTH)setStatus("Won")
    else if(newHistory.length >= MAX_ATTEMPTS)setStatus("Lost")
    setHistory(newHistory)
    setCurrGuess([])

  }

  return (
    <div className="game"> 
      <GameHeader attempt = {Math.min(history.length + 1, MAX_ATTEMPTS)}></GameHeader>
      <GuessSlots currGuess = {currGuess}></GuessSlots>
      <ColorPalette onPick = {onPick}></ColorPalette>
      <button
        type="button"
        className="submit-btn"
        onClick={handleSubmit}
        disabled={currGuess.length !== CODE_LENGTH}
      >
        Submit Guess
      </button>
    </div>
  )
}

export default App
