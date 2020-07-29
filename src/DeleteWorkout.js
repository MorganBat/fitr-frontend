import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const DeleteWorkout = ({workoutId, jwt}) => {

    const [isDeleted, setIsDeleted] = useState(false)
    const token = jwt

    function DeleteWorkout() {
        axios.delete(`https://fitr-backend.herokuapp.com/workouts/${workoutId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(setIsDeleted(true))
    }


    return (
        <div className="deleteWorkout">
            <button onClick={DeleteWorkout} class="btn btn-danger"> Delete </button>
            {isDeleted && <Redirect to="/workouts" />}
        </div>
    )
}

export default DeleteWorkout