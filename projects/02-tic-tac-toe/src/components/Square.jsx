import React from 'react'
import './../styles/Square.css'

export function Square({ children }) {
  return (
    <div className='square'>
      {children}
    </div>
  )
}