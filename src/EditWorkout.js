import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const EditWorkout = ({workoutId, jwt}) => {

    const [workout, setWorkout] = useState("")
    const [workoutDate, setWorkoutDate] = useState("")
    const [workoutUser, setWorkoutUser] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const token = jwt

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
            workout: {
                exercises: workout,
                date: workoutDate,
                user: workoutUser
            }    
        }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }   
            }
        )
        .then(setIsEdited(true))
    }

return (
    <div>
        {errorMessage && <h3>{errorMessage}</h3>}
        <input
        placeholder="Exercises"
        value={workout}
        onChange={e => setWorkout(e.target.value)}
    />
    <input
        placeholder="Date"
        value={workoutDate}
        onChange={e => setWorkoutDate(e.target.value)}
    />
    <button onClick={editWorkout}> Login </button>

        {isEdited && <Redirect to="/" />}
    </div>
)

}

export default EditWorkout