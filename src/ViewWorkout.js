import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ViewWorkout = (props) => {

    const [workout, setWorkout] = useState([])
    const [errorMessage, setErrorMessage]= useState("")

    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts/${props.workoutId}`)
        .then(res => {
            setWorkout(res.data)
        })
        .catch (e => 
            setErrorMessage("There was an error")
            )
    },[])


    return (
        <>
            {errorMessage && <h3>{errorMessage}</h3>}
            { 
                    <li>
                         {workout.exercise} by {workout.user_id} on {workout.date}
                    </li> 
            }
            <Link to={`/workouts/${props.workoutId}/edit`}> EDIT </Link>
            <Link to="/">View all</Link>
        </>
    )
}

export default ViewWorkout