import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const DeleteWorkout = ({workoutId, jwt}) => {

    const [isDeleted, setIsDeleted] = useState(false)
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU3ODYzNzksInN1YiI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.MXeqITDxtZBZPkhVF0vhvNRZuVDzZnCRNs_VO3QK4lk'

    function DeleteWorkout() {
        axios.delete(`https://fitr-backend.herokuapp.com/workouts/${workoutId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(setIsDeleted(true))
    }


    return (
        <div>
        <button onClick={DeleteWorkout}> Delete </button>
        {isDeleted && <Redirect to="/workouts" />}
        </div>
    )
}

export default DeleteWorkout

