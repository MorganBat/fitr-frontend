import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

// const EditWorkout = ({workoutId, jwt}) => {
    // Change props for development. Change back before deploying!!!!
    const EditWorkout = ({workoutId}) => {

    const [workoutExercises, setWorkoutExercises] = useState('')
    const [workoutDate, setWorkoutDate] = useState("")
    const [workoutUser, setWorkoutUser] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    // const token = jwt
    // Changed to static token for development. Change back before deploying!!!
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTYwNjg3MTEsInN1YiI6NCwiZW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20ifQ.CO610caidLmrezYPjcDfl_56b1ThNvn5VwOBtcAznCs'

    useEffect(() => {
        axios.get(`http://localhost:3001/workouts/${workoutId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }    
        })
        .then(res => {
            setWorkoutDate(res.data.date)
            setWorkoutExercises(JSON.parse(res.data.exercises))
        })
        .catch(e => {
            setErrorMessage("el problemo")
        })
    }, [])

    function editWorkout() {
        axios.put(`http://localhost:3001/workouts/${workoutId}`,{
            workout: {
                exercises: workoutExercises,
                date: workoutDate,
                user_id: workoutUser,
                id: workoutId,
            }    
        }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }   
            }
        )
        .then(
            setIsEdited(true),
            console.log(workoutExercises),
        )
    }

return (
    <div>
        {errorMessage && <h3>{errorMessage}</h3>}
        <input
            placeholder="Date"
            type="date"
            value={workoutDate}
            onChange={e => setWorkoutDate(e.target.value)}
        />
        {Object.keys(workoutExercises).map((item, i) => (
            <div className="exercise" key={i}>
                {item}:
                {workoutExercises[`${item}`].map((repsAndWeights, j) => {
                    let reps = String(repsAndWeights[0])
                    let weight = String(repsAndWeights[1])
                    return(<div className="repsAndWeights">
                        {/* Below line to be removed before deployment. For dev purposes */}
                        {/* item = {item}, 
                        j = {j} */}
                        <input
                            value={reps}
                            size="2"
                            // type="number"
                            onChange={e => {
                                const newWorkoutExercises = {...workoutExercises}
                                newWorkoutExercises[item][j][0] = parseInt(e.target.value)
                                setWorkoutExercises(newWorkoutExercises)
                            }}                            
                        />reps(index 0)                  
                        <input
                            value={weight}
                            size="3"
                            // type="number"
                            onChange={e => {
                                const newWorkoutExercises = {...workoutExercises}
                                newWorkoutExercises[item][j][1] = parseInt(e.target.value)
                                setWorkoutExercises(newWorkoutExercises)
                                console.log(workoutExercises)
                            }}
                        />kg(index 1)
                    </div>)
                })}
            </div>
        ))}
        <button onClick={editWorkout}> Submit </button>
        <Link to={`/workouts/${workoutId}`}>Back</Link>
        {Object.keys(workoutExercises).map((item, i) => (
                <div className="exercise" key={i}>
                    {item}:
                     {workoutExercises[`${item}`].map((repsAndWeights) => {
                        let reps = String(repsAndWeights[0])
                        let weight = String(repsAndWeights[1])
                        console.log(reps)
                        return(<li className="repsAndWeights">
                            {reps} reps, {weight} kg
                        </li>)
                    })}
                </div>
            ))}

        {isEdited && <Redirect to="/" />}
    </div>
)

}

export default EditWorkout