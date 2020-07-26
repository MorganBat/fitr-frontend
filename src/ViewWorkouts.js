import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
// import DeleteWorkout from './DeleteWorkout'
// import { AppContext } from './Login'

const ViewWorkouts = ({jwt}) => {

    const [workouts, setWorkouts] = useState([])
    const [errorMessage, setErrorMessage]= useState("")
    // const appContext = useContext(AppContext)

    const token = {jwt}

    useEffect(() => {
        axios.get(
            `https://fitr-backend.herokuapp.com/workouts`,{
            headers: {
                'Authorization': `Bearer ${token.jwt}`
            }    
        })
        .then(res => {
            setWorkouts(res.data)
        })
        .catch (e => 
            setErrorMessage("There was an error")
            )
    },[])


    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {console.log(workouts)}
            {workouts.forEach(workout => {
                console.log(workout.exercises)
                console.log(workout.date)
            })}
            this is text
        </div>
    )
}

export default ViewWorkouts