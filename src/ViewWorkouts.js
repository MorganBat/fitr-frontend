import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
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
            // console.log(res.data)
        })
        .catch (e => 
            setErrorMessage("There was an error")
            )
    },[])


    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {workouts.map((workout, index) => (
                // console.log(workout.exercises)
                // console.log(workout.date)
                <>
                <li><Link to={`workouts/${workout.id}`}>{workout.date}</Link></li>
                <li>{workout.exercises}</li>
                </>
            ))}

            this is text
        </div>
    )
}

export default ViewWorkouts