import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import DeleteWorkout from './DeleteWorkout'

const ShowWorkout = (props) => {

    const [workout, setWorkout] = useState('')
    const [workoutDate, setWorkoutDate] = useState('')
    const [errorMessage, setErrorMessage]= useState('')

    // Changed token to static for testing and development purposes. Change back when deploying!!!
    // const token = jwt
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU5ODM4MTUsInN1YiI6NCwiZW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20ifQ.g4ANyizPCelLo2rjQjzdkW69TtlekKkLgVeWxdzps1E'

    // ${props.workoutId}
    useEffect(() => {
        // Changed location of request for testing purposes
        axios.get(`http://localhost:3001/workouts/${props.workoutId}`,{
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

    function mapWorkout(workout){
        "Test"
        console.log("test")
    }


    return (
        <> 
            {!props.jwt && <Redirect to="/Login" />}
            {errorMessage && <h3>{errorMessage}</h3>}
            <h2>{workoutDate}</h2>
            {mapWorkout}
            <Link to={`/workouts/${props.workoutId}/edit`}> EDIT </Link>
            <DeleteWorkout workoutId={props.workoutId}/>
            <Link to="/workouts">View all</Link>
        </>
    )
}

export default ShowWorkout