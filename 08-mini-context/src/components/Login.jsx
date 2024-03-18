import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // provide the type of context u want (user, product,auth ..etc)
    const {setUser} = useContext(UserContext)  // storing the user details in global store/context

    const handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault()
        setUser({username,password})

    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            />
            {" "}
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'            
            />

            <button
            onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login