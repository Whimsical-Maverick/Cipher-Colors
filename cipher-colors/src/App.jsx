import GameHeader from "./components/GameHeader"
import { useState } from "react"
import { CODE_LENGTH } from "./constants"
import GuessSlots from "./components/GuessSlots"
import ColorPalette from "./components/ColorPalette"
import "./App.css"

function App() {
  const [currGuess,setCurrGuess] = useState([]);
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
                return;
              }
           }
        }
        setCurrGuess([...currGuess,colorName])
   }
  return (
    <div className="game"> 
      <GameHeader attempt = {1}></GameHeader>
      <GuessSlots currGuess = {currGuess}></GuessSlots>
      <ColorPalette onPick = {onPick}></ColorPalette>
    </div>
  )
}

export default App
