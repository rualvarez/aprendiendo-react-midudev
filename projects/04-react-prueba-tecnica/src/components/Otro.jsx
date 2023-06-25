import { PREFIX_URL_IMAGE } from '../constant'
import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Random fact' })

  return (
    <>
      {imageUrl && <img src={`${PREFIX_URL_IMAGE}${imageUrl}`} />}
    </>
  )
}
