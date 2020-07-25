import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const Login = ({onLogin}) => {
    const [userEmail, setEmail]= useState("")
    const [userPassword, setPassword] = useState("")
    const [userToken, setJWT] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)


function getToken() {
    axios.post('https://fitr-backend.herokuapp.com/user_token',{
        auth: {
            email: userEmail,
            password: userPassword, 
        }
    })
    .then(res => setJWT(res.data.jwt),
        onLogin(userToken),
        setLoggedIn(true)
        )
}

return (
    <div>
        <h1>LOG IN</h1>
    <input
        placeholder="Email"
        value={userEmail}
        onChange={e => setEmail(e.target.value)}
    />
    <input
        placeholder="Password"
        value={userPassword}
        onChange={e => setPassword(e.target.value)}
    />
    <button onClick={getToken}> Login </button>
    {loggedIn && <Redirect to="/workouts" />}
    </div>
)
}

// const AppContext = React.createContext()

// export {AppContext, userToken}
export default Login