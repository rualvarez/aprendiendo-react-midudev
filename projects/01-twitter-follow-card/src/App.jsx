import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
  {
    username: 'midudev',
    name: 'Miguel Ángel Durán',
    avatar: 'midudev',
    isFollowing: true
  },
  {
    username: 'vite_js',
    name: 'Vite',
    avatar: 'vitejs',
    isFollowing: false
  },
  {
    username: 'reactjs',
    name: 'React',
    avatar: 'reactjs',
    isFollowing: false
  }
]

function App() {

  return (
    <>
      {
        users.map(({ username, name, avatar, isFollowing }) => (
          <TwitterFollowCard
            key={username}
            username={username}
            avatar={avatar}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </>
  )
}

export default App
