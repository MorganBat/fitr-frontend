import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const EditWorkout = (props) => {

    const [workout, setWorkout] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU3ODYzNzksInN1YiI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.MXeqITDxtZBZPkhVF0vhvNRZuVDzZnCRNs_VO3QK4lk'

    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts/${props.workoutId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }    
        })
        .then(res => {
            setWorkout(res.data.exercises)
        })
    })

return (
    <div>

    </div>
)

}

export default EditWorkout