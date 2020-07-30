import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import DeleteWorkout from './DeleteWorkout'
import '../../assets/styles/ShowWorkout.css'

const ShowWorkout = ({workoutId, jwt}) => {

    const [workout, setWorkout] = useState('')
    const [workoutDate, setWorkoutDate] = useState('')
    const [errorMessage, setErrorMessage]= useState('')

    const token = jwt

    useEffect(() => {
        axios.get(`https://fitr-backend.herokuapp.com/workouts/${workoutId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }   
        })
        .then(res => {
            setWorkoutDate(res.data.date)
            setWorkout(JSON.parse(res.data.exercises))
        })
        .catch (e => 
            setErrorMessage("There was an error. Please try again")
            )
    },[])

    return (
        <> 
            {!token && <Redirect to="/login" />}
            {errorMessage && <h3>{errorMessage}</h3>}

            <div className="show-grid-container">
            <div className="h2-container">
                <h2 className="show-workout-date">{workoutDate}</h2>
            </div>
                <div className="show-details-container">
                        {Object.keys(workout).map((item, i) => (
                            <div className="exercse-container">
                                <ol className="showExercise" key={i}>
                                    {item}:
                                    {workout[`${item}`].map((repsAndWeights) => {
                                        let reps = String(repsAndWeights[0])
                                        let weight = String(repsAndWeights[1])
                                        return(<li className="repsAndWeights">
                                            {reps} reps, {weight} kg
                                        </li>)
                                    })}
                                </ol>
                            </div>
                        ))}

                
                </div>
                <span className="navLinks">
                  <div> <Link to={`/workouts/${workoutId}/edit`}><button type="button" class="btn btn-warning">Edit</button></Link></div> 
                    <DeleteWorkout workoutId={workoutId} jwt={jwt}/>
                    <div><Link to="/workouts"><button class="btn btn-light">Back</button></Link></div>
                </span>
            </div>

        </>
    )
}

export default ShowWorkout