import React, {useState} from 'react'
import axios from 'axios'

const [userEmail, setEmail] = useState("")
const [userPassword, setPassword] = useState("")
const [isCreated, setIsCreated] = useState(false)
const [errorMessage, setErrorMessage] = useState("")

const Signup = () => {

    function createUser() {
        if(userEmail && userPassword) {
            axios.post('https://fitr-backend.herokuapp.com/users', {
                email: userEmail,
                password: userPassword
            })
            .then(setIsCreated(true))
        } else {
            setErrorMessage("Please enter a username and password")
        }
    }

    return (
        <div>
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
        <button onClick={createUser}> Signup </button>
        {isCreated && <Redirect to="/" />}
    </div>
    )

}

export default Signup