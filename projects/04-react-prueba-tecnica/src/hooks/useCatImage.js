import { useEffect, useState } from 'react'
import { PREFIX_URL_IMAGE } from '../constant'

// custom hook
export function useCatImage ({ fact }) {
  const [imageUrl, setImageURL] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    const ENDPOINT_URL_IMAGE = PREFIX_URL_IMAGE + '/cat/says/' + firstWord + '?json=true'
    fetch(ENDPOINT_URL_IMAGE)
      .then(res => res.json())
      .then(data => setImageURL(data.url))
  }, [fact])

  return { imageUrl }
}
