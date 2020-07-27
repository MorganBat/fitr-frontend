import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import DeleteWorkout from './DeleteWorkout'

const ViewWorkout = (props) => {

    const [workout, setWorkout] = useState([])
    const [workoutDate, setWorkoutDate] = useState([])
    const [errorMessage, setErrorMessage]= useState("")

    const token = props.jwt

    // ${props.workoutId}
    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts/${props.workoutId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }   
        })
        .then(res => {
            setWorkoutDate(res.data.date)
            setWorkout(res.data.exercises)
        })
        .catch (e => 
            setErrorMessage("There was an error")
            )
    },[])


    return (
        <> 
            {!props.jwt && <Redirect to="/Login" />}
            {errorMessage && <h3>{errorMessage}</h3>}
            <h2>{workoutDate}</h2>
            {workout}
            <br></br>
            <Link to={`/workouts/${props.workoutId}/edit`}> EDIT </Link>
            <DeleteWorkout workoutId={props.workoutId}/>
            <Link to="/workouts">View all</Link>
        </>
    )
}

export default ViewWorkout