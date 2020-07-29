import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import DeleteWorkout from './DeleteWorkout'

const ShowWorkout = ({workoutId, jwt}) => {

    const [workout, setWorkout] = useState('')
    const [workoutDate, setWorkoutDate] = useState('')
    const [errorMessage, setErrorMessage]= useState('')

    const token = jwt

    // ${props.workoutId}
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
            {console.log(jwt)}
            {/* {!token && <Redirect to="/Login" />} */}
            {errorMessage && <h3>{errorMessage}</h3>}
            <h2>{workoutDate}</h2>
            {Object.keys(workout).map((item, i) => (
                <div className="exercise" key={i}>
                    {item}:
                     {workout[`${item}`].map((repsAndWeights) => {
                        let reps = String(repsAndWeights[0])
                        let weight = String(repsAndWeights[1])
                        console.log(reps)
                        return(<li className="repsAndWeights">
                            {reps} reps, {weight} kg
                        </li>)
                    })}
                </div>
            ))}
            <span className="navLinks">
                <Link to={`/workouts/${workoutId}/edit`}><button type="button" class="btn btn-warning"> EDIT </button></Link>
                <DeleteWorkout workoutId={workoutId}/>
                <Link to="/workouts"><button class="btn btn-link">View all</button></Link>
            </span>
        </>
    )
}

export default ShowWorkout