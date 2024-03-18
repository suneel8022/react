import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>   {/* Now the components inside/under this are aware of the context or data :)* */}
      <h1>react video for context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
