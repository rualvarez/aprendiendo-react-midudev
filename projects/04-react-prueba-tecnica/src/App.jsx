import { PREFIX_URL_IMAGE } from './constant'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCarFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
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
