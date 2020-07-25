import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ViewWorkout = (props) => {

    const [workout, setWorkout] = useState([])
    const [workoutDate, setWorkoutDate] = useState([])
    const [errorMessage, setErrorMessage]= useState("")

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU3ODYzNzksInN1YiI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.MXeqITDxtZBZPkhVF0vhvNRZuVDzZnCRNs_VO3QK4lk'
    // ${props.workoutId}
    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts/1`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }   
        })
        .then(res => {
            console.log(res.data)
            setWorkoutDate(res.data.date)
            setWorkout(res.data.exercises)
            console.log(1)
        })
        .catch (e => 
            setErrorMessage("There was an error")
            )
    },[])


    return (
        <>
            {errorMessage && <h3>{errorMessage}</h3>}
            { 
                    // <li>
                    //      {workout.exercise} by {workout.user_id} on {workout.date}
                    // </li> 
            }
            <h2>{workoutDate}</h2>
            {workout}
            <br></br>
            {/* <Link to={`/workouts/${props.workoutId}/edit`}> EDIT </Link> */}
            <Link to="/">View all</Link>
        </>
    )
}

export default ViewWorkout