import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
  {
    username: 'midudev',
    name: 'Miguel Ángel Durán',
    avatar: 'midudev'
  },
  {
    username: 'vite_js',
    name: 'Vite',
    avatar: 'vitejs'
  },
  {
    username: 'reactjs',
    name: 'React',
    avatar: 'reactjs'
  }
]

function App() {

  return (
    <>
      {
        users.map(({ username, name, avatar }) => (
          <TwitterFollowCard
            key={username}
            username={username}
            name={name}
            avatar={avatar} />
        ))
      }
    </>
  )
}

export default App
