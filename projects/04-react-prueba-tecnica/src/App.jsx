import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'

export function App () {
  // const ENDPOINT_URL_FACT = 'https://catfact.ninja/fact'
  const PREFIX_URL_IMAGE = 'https://cataas.com'

  const [fact, setFact] = useState()
  const [imageUrl, setImageURL] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    const ENDPOINT_URL_IMAGE = PREFIX_URL_IMAGE + '/cat/says/' + firstWord + '?json=true'
    fetch(ENDPOINT_URL_IMAGE)
      .then(res => res.json())
      .then(data => setImageURL(data.url))
  }, [fact])

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
