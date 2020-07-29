import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'



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
            // console.log(res.data)
        })
        .catch (e => 
            setErrorMessage("There was an error")
            )
    },[])


    return (
        <div>
            {!jwt && <Redirect to="/" />}
            <h1>My workouts - user </h1>
            {errorMessage && <h3>{errorMessage}</h3>}
            {/* <Link to={}>Add a new workout</Link> */}
            {workouts.map((workout, index) => (
                <>
                <li><Link to={`workouts/${workout.id}`}>{workout.date}</Link></li>
                <li>{workout.exercises}</li>
                </>
            ))}

        </div>
    )
}

export default ViewWorkouts