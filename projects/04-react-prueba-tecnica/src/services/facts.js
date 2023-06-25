const ENDPOINT_URL_FACT = 'https://catfact.ninja/fact'

// export const getRandomFact = () => {
//   return fetch(ENDPOINT_URL_FACT)
//     .then(res => res.json())
//     .then(data => {
//       const { fact } = data
//       return fact
//     })
// }

export const getRandomFact = async () => {
  const res = await fetch(ENDPOINT_URL_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
