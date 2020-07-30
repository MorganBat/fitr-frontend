import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import { format } from 'date-fns'
import './assets/styles/ViewWorkouts.css'

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
            <div className="h2-container">
            <h2>All Workouts</h2>
            </div>
            {errorMessage && <h3>{errorMessage}</h3>}

            <div className="workouts-container">
                {workouts.map((workout) => (
                    <>
                    <li className="workout"><Link to={`workouts/${workout.id}`}>{workout.date}</Link></li>
                    {/* <li>{Object.keys(workout.exercises)}</li> */}
                    </>
                ))}
            </div>
            <div className="nav-container">
            <Link to="/create"><button class="btn btn-primary">Add a new Workout</button></Link>
            <Link to="/user"><button class="btn btn-info">User Control Panel</button></Link>
            </div>

        </div>
    )
}

export default ViewWorkouts