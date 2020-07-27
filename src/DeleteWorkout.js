import React, {useState} from 'react'
import axios from 'axios'

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
        <button onClick={DeleteWorkout}> Delete </button>
       
    )
}

export default DeleteWorkout