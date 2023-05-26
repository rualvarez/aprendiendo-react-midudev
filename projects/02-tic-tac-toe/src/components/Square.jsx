import React from 'react'
import './../styles/Square.css'

export function Square({ children, index, updateBoard, isSelected }) {

  const className = isSelected ? 'square is-selected': 'square'

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}