import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ViewWorkout = (props) => {

    const [workout, setWorkout] = useState([])
    const [workoutDate, setWorkoutDate] = useState([])
    const [errorMessage, setErrorMessage]= useState("")

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU4MTIyODgsInN1YiI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.XUgN6nGddjVU5Wex56gPvSuZlBk-rzkec6K_gSmdvGE'
    // ${props.workoutId}
    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts/1`,{
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
            {errorMessage && <h3>{errorMessage}</h3>}
            <h2>{workoutDate}</h2>
            {workout}
            <br></br>
            {/* <Link to={`/workouts/${props.workoutId}/edit`}> EDIT </Link> */}
            <Link to="/">View all</Link>
        </>
    )
}

export default ViewWorkout