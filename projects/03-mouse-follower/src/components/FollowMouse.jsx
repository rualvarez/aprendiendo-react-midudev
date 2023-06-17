import React, { useState, useEffect } from 'react'

export function FollowMouse() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})

  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({ x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //Cuando el componente se desmonta
    //Cuando cambian las dependencias (enabled) , antes de ejecutar
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguimiento
      </button>
    </>
  )
}