import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import DeleteUser from './DeleteUser'

const ShowUser = ({userId, jwt}) => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [isEdited, setIsEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const token = jwt

    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }    
        })
        .then(res => {
            setUserName(res.data.name)
            setUserEmail(res.data.email)
        })
        .catch(e => {
            setErrorMessage("A problem has occurred, please reload and try again.")
        })
    }, [])

    function editUser() {
        axios.put(`https://fitr-backend.herokuapp.com/users/${userId}`,{
            user: {
                email: userEmail,
                name: userName,
                password: userPassword
            }    
        }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }   
            }
        )
        .then(
            setIsEdited(true),
        )
        .catch(setErrorMessage("A problem has occurred, please reload and try again.")

        )
    }

    return (
    <div className="edit-container">
        {!token && <Redirect to="/login" />}
        {errorMessage && <h3>{errorMessage}</h3>}
        <input
            placeholder="Name"
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
        />
        <input
            placeholder="Email"
            type="email"
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
        />
        <input
            placeholder="Password"
            type="password"
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
        />

            <div><button onClick={editUser} class="btn btn-success"> Submit </button></div>
            <div><Link to={`/workouts`}><button class="btn btn-light">Back</button></Link></div>
        {isEdited && <Redirect to={`/workouts`} />}
    </div>
    )
}

export default ShowUser