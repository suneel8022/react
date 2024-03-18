import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  // extracting the data(user) from global data/store directly without any offence :)
  const {user} = useContext(UserContext)

  if(!user) return <h1>Not logged in homie!</h1>

  return (
    <div>
      <h1>Profile : {user.username}</h1>
    </div>
  )
}

export default Profile