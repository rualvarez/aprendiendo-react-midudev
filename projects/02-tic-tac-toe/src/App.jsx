import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants';

function App () {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
  }

  const updateBoard = (index) => {

    if (board[index]) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    
    const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X;
    setTurn(newTurn);
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
                index={index}
                updateBoard={updateBoard}
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
