import React, {useState} from 'react'
import axios from 'axios'

const Login = ({onLogin}) => {
    const [userEmail, setEmail]= useState("")
    const [userPassword, setPassword] = useState("")
    const [userToken, setJWT] = useState("")


function getToken() {
    axios.post('http://localhost:3000/user_token',{
        auth: {
            email: userEmail,
            password: userPassword, 
        }
    })
    .then(res => setJWT(res.data.jwt))
}

return (
    <div>
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
    </div>
)
}

const AppContext = React.createContext()

export {AppContext, userToken}
export default Login