import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null));

  const resetGame = () => {
    setBoard(Array(9).fill(null));
  }

  return (
    <div className='container'>
      <h1>Tic tac toe</h1>
      <button className='reset-game' onClick={resetGame}>Reiniciar juego</button>
      <div className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
              >
                {square}
              </Square>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
