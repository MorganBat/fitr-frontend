import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const Login = ({onLogin}) => {
    const [userEmail, setUserEmail]= useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userToken, setUserToken] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)


async function getToken() {
    await axios.post('https://fitr-backend.herokuapp.com/user_token',{
        auth: {
            email: userEmail,
            password: userPassword, 
        }
    })
    .then(res => setUserToken(res.data.jwt),
        onLogin(userToken),
        setLoggedIn(true),
        console.log(`jwt: ${userToken}`)
        )
}

return (
    <div>
        <h1>LOG IN</h1>
    <input
        placeholder="Email"
        value={userEmail}
        onChange={e => setUserEmail(e.target.value)}
    />
    <input
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={e => setUserPassword(e.target.value)}
    />
    <button onClick={getToken}> Login </button>
    {loggedIn && <Redirect to="/workouts" />}
    </div>
)
}

// const AppContext = React.createContext()

// export {AppContext, userToken}
export default Login