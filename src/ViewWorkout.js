import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import DeleteWorkout from './DeleteWorkout'

const ViewWorkout = (props) => {

    const [workout, setWorkout] = useState('')
    const [workoutDate, setWorkoutDate] = useState('')
    const [errorMessage, setErrorMessage]= useState('')

    // Changed token to static for testing and development purposes. Change back when deploying!!!
    // const token = jwt
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU5MzA3NDAsInN1YiI6NCwiZW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20ifQ.eK8s8VqcmOENO_dUNeiUcElU1AMtfRNyWgXX-PjUGOU'

    // ${props.workoutId}
    useEffect(() => {
        axios.get(`http://localhost:3001/workouts/${props.workoutId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }   
        })
        .then(res => {
            console.log(res.data.date)
            setWorkoutDate(res.data.date)
            console.log(res.data.exercises)
            setWorkout(res.data.exercises)
            // console.log(JSON.parse(res.data.exercises))
            console.log({workout})
            console.log({workoutDate})
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