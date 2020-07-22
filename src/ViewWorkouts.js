import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteWorkout from './DeleteWorkout'
import { AppContext } from '../Login'

const ViewWorkouts = () => {

    const [workouts, setWorkouts] = useState([])
    const [errorMessage, setErrorMessage]= useState("")
    const appContext = useContext(AppContext)

    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts`, /* JWT header info appContext.jwt? */)
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
            { 
                workouts.length > 0 ?
                {workouts}
                : (
                    <div>loading...</div>
                )
            }
        </div>
    )
}

export default ViewWorkouts