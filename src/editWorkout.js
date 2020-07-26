import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const EditWorkout = ({workoutId}) => {

    const [workout, setWorkout] = useState("")
    const [workoutDate, setWorkoutDate] = useState("")
    const [workoutUser, setWorkoutUser] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU3ODYzNzksInN1YiI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.MXeqITDxtZBZPkhVF0vhvNRZuVDzZnCRNs_VO3QK4lk'

    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts/${workoutId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }    
        })
        .then(res => {
            setWorkoutDate(res.data.date)
            setWorkout(res.data.exercises)
            setWorkoutUser(res.data.user)
        })
        .catch(e => {
            setErrorMessage("el problemo")
        })
    }, [])

    function editWorkout() {
        axios.put(`https://fitr-backend.herokuapp.com/workouts/${workoutId}`,{
            /*workout format*/},{
                headers: {
                    'Authorization': `Bearer ${token}`
                }   
            }
        })
    }

return (
    <div>
        {errorMessage && <h3>{errorMessage}</h3>}
        {
            workout: {
                exercises: "earaer",
                date: "year-month-day",
                user:
            }
        }
    </div>
)

}

export default EditWorkout