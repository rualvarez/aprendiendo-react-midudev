import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import { PREFIX_URL_IMAGE } from './constant'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Obtener nuevo hecho</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${PREFIX_URL_IMAGE}${imageUrl}`} />}
    </main>
  )
}
