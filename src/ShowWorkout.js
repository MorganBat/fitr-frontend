import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import DeleteWorkout from './DeleteWorkout'
import { format } from 'date-fns'

const ShowWorkout = ({workoutId, jwt}) => {

    const [workout, setWorkout] = useState('')
    const [workoutDate, setWorkoutDate] = useState('')
    const [errorMessage, setErrorMessage]= useState('')

    const token = jwt

    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts/${workoutId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }   
        })
        .then(res => {
            setWorkoutDate(res.data.date)
            setWorkout(JSON.parse(res.data.exercises))
        })
        .catch (e => 
            setErrorMessage("There was an error")
            )
    },[])

    return (
        <> 
            {!token && <Redirect to="/login" />}
            {errorMessage && <h3>{errorMessage}</h3>}
            <h2>{workoutDate}</h2>
            {Object.keys(workout).map((item, i) => (
                <ol className="showExercise" key={i}>
                    {item}:
                     {workout[`${item}`].map((repsAndWeights) => {
                        let reps = String(repsAndWeights[0])
                        let weight = String(repsAndWeights[1])
                        return(<li className="repsAndWeights">
                            {reps} reps, {weight} kg
                        </li>)
                    })}
                </ol>
            ))}
            <span className="navLinks">
                <Link to={`/workouts/${workoutId}/edit`}><button type="button" class="btn btn-warning">Edit</button></Link>
                <DeleteWorkout workoutId={workoutId} jwt={jwt}/>
                <Link to="/workouts"><button class="btn btn-light">View all</button></Link>
            </span>
        </>
    )
}

export default ShowWorkout