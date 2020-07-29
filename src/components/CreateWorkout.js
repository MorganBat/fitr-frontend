import React, {useState} from 'react'
import axios from axios

const CreateWorkout = ({jwt}) => {
    const [exercise, setExercises] = useState([])
    const [workoutDate, setWorkoutDate] = useState("")
    

    function createWorkout() {
        axios.post(`https://fitr-backend.herokuapp.com/workouts`, {
            workout: {
                exercises: workout,
                date: workoutDate,
                user: workoutUser
            }    
        },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }   
        }
        )
    }

    function addExercise() {
        setExercises([...exercise, ""])
        console.log(exercise)
      }
    
      function handleChange(e, index) {
        exercise[index] = e.target.value
    
      }
    

    return (
        <div>
          <h1>Record a workout</h1>
            {exercise.map((exercise,index) =>(
                <>
                <div key={index}>
                  <input type="text" onChange={(e) => handleChange(e, index) } defaultValue={exercise}/>
                </div>
                </>
             ))}
           
          <button onClick={addExercise}>Add Exercise</button>
    
          <button>Submit</button>
        </div>
      );

}

export default CreateWorkout