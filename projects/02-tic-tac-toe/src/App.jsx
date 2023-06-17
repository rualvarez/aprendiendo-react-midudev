import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants';
import { checkWinner } from './logic/board';
import confetti from 'canvas-confetti';

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });
  // const [turn, setTurn] = useState(TURNS.X);
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const isWinner = checkWinner(newBoard)
    if (isWinner) {
      confetti()
      setWinner(isWinner)
    }
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
