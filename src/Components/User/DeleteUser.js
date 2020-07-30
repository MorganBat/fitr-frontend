import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const DeleteUser = ({userId, jwt}) => {

    const [isDeleted, setIsDeleted] = useState(false)
    const token = jwt

    function DeleteUser() {
        axios.delete(`https://fitr-backend.herokuapp.com/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(setIsDeleted(true))
    }

    return (
        <div className="deleteUser">
            <button onClick={DeleteUser} class="btn btn-danger">Delete</button>
            {isDeleted && <Redirect to="/signup" />}
        </div>
    )

}

export default DeleteUser