import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const Signup = () => {

const [userEmail, setEmail] = useState("")
const [userPassword, setPassword] = useState("")
const [isCreated, setIsCreated] = useState(false)
const [errorMessage, setErrorMessage] = useState("")

    function createUser() {
        if(userEmail && userPassword) {
            axios.post('https://fitr-backend.herokuapp.com/users', {
                user: {
                    email: userEmail,
                    password: userPassword
                }
            })
            .then(setIsCreated(true))
        } else {
            setErrorMessage("Please enter a username and password")
        }
    }

    return (
        <div>
        <h1>SIGNUP</h1>
        <div>{errorMessage}</div>
        <input
            placeholder="Email"
            type="text"
            value={userEmail}
            onChange={e => setEmail(e.target.value)}
        />
        <input
            placeholder="Password"
            type="password"
            value={userPassword}
            onChange={e => setPassword(e.target.value)}
        />
        <button onClick={createUser} class="btn btn-success"> Signup </button>
        {isCreated && <Redirect to="/Login" />}
    </div>
    )

}

export default Signup