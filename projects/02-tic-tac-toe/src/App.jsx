import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants';
import { checkWinner } from './logic/board';
import confetti from 'canvas-confetti';

function App () {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const isWinner = checkWinner(newBoard)
    if (isWinner) {
      confetti()
      setWinner(isWinner)
    }
    
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
      <div className='turn'>
        <Square 
          isSelected={TURNS.X === turn}
        >
          {TURNS.X}
        </Square>
        <Square 
          isSelected={TURNS.O === turn}
        >
          {TURNS.O}
        </Square>
      </div>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Gano '
                }
              </h2>
              <header className='win'>
                {
                  winner && <Square>{winner}</Square>
                }
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </div>
  )
}

export default App
