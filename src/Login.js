import React, {useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import './assets/styles/Login.css'

const Login = ({onLogin, setId}) => {
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
            setId(parseJwt(res.data.jwt).sub)
            setLoggedIn(true)
        })
    }

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    return (
        <>
        <div className="login-flex-container">
        <div className="login-details-container">
            <h1>LOG IN</h1>
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