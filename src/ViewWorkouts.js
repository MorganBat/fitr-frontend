import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import { format } from 'date-fns'

const ViewWorkouts = ({jwt}) => {

    const [workouts, setWorkouts] = useState([])
    const [errorMessage, setErrorMessage]= useState("")
    
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
            {!jwt && <Redirect to="/login" />}
            <h1>All Workouts</h1>
            {errorMessage && <h3>{errorMessage}</h3>}
            {/* <Link to={}>Add a new workout</Link> */}
            {workouts.map((workout) => (
                <>
                <li className="workout"><Link to={`workouts/${workout.id}`}>{workout.date}</Link></li>
                {/* <li>{Object.keys(workout.exercises)}</li> */}
                </>
            ))}

        </div>
    )
}

export default ViewWorkouts