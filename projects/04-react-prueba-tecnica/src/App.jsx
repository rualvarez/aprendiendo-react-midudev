import { useEffect, useState } from 'react'

export function App () {
  const ENDPOINT_URL_FACT = 'https://catfact.ninja/fact'

  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(ENDPOINT_URL_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
