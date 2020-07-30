import React, {useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import './assets/styles/Login.css'

const Login = ({onLogin}) => {
    const [userEmail, setUserEmail]= useState("")
    const [userPassword, setUserPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


async function getToken() {
    setErrorMessage("")
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
    .catch(e => {
        setErrorMessage("Incorrect details. Please try again.")
    })
}

return (
    <>
        <div className="login-flex-container">
        <div className="login-details-container">
            <h1>LOG IN</h1>
            {errorMessage && <h3>{errorMessage}</h3>}
            <div>
            <input
                className="form-control"
                placeholder="Email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
            />
            </div>
            <div>
            <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
            />
            </div>
            <br/>
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