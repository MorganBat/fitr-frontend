import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

// const EditWorkout = ({workoutId, jwt}) => {
    // Change props for development. Change back before deploying!!!!
    const EditWorkout = ({workoutId}) => {

    const [workoutExercises, setWorkoutExercises] = useState('')
    const [workoutDate, setWorkoutDate] = useState("")
    const [workoutUser, setWorkoutUser] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    // const token = jwt
    // Changed to static token for development. Change back before deploying!!!
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU5MTQ4ODIsInN1YiI6NCwiZW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20ifQ.xwz-p0VIaBHbHTSfuSv2SvCgV0lglvJ-JMXyu_LEvVE'

    useEffect(() => {
        axios.get(`http://localhost:3001/workouts/${workoutId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }    
        })
        .then(res => {
            setWorkoutDate(res.data.date)
            setWorkoutExercises(res.data.exercises)
            console.log(workoutExercises)
            setWorkoutUser(res.data.user)
        })
        .catch(e => {
            setErrorMessage("el problemo")
        })
    }, [])

    function editWorkout() {
        axios.put(`https://fitr-backend.herokuapp.com/workouts/${workoutId}`,{
            workout: {
                exercises: workoutExercises,
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
        {/* <input
            placeholder="Exercises"
            value={workoutExercises}
            onChange={e => setWorkoutExercises(e.target.value)}
        /> */}
        {workoutExercises}
        <input
            placeholder="Date"
            value={workoutDate}
            onChange={e => setWorkoutDate(e.target.value)}
        />

        <button onClick={editWorkout}> Submit </button>
        <Link to={`/workouts/${workoutId}`}>Back</Link>

        {isEdited && <Redirect to="/" />}
    </div>
)

}

export default EditWorkout