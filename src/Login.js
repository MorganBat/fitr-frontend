import React, {useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import './assets/styles/Login.css'

const Login = ({onLogin}) => {
    const [userEmail, setUserEmail]= useState("")
    const [userPassword, setUserPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)


async function getToken() {
    await axios.post('https://fitr-backend.herokuapp.com/user_token',{
        auth: {
            email: userEmail,
            password: userPassword, 
        }
    })
    .then(res => {
        onLogin(res.data.jwt)
        setLoggedIn(true)
    })
}

return (
    <>
        <div className="login-flex-container">
        <div className="login-details-container">
            <h1>LOG IN</h1>
            <div>
            <input
                placeholder="Email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Password"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
            />
            </div>
            <button onClick={getToken} class="btn btn-success"> Login </button>
            <br />
            <Link to="/signup">Need an Account? Register Now</Link>

        {loggedIn && <Redirect to="/workouts" />}
        </div>
        </div>
    </>
)
}

export default Login