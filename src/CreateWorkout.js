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
        setRepsWeights([...repsWeights, ""])
      }
    
      function handleExerciseChange(e, index) {
        exercise[index] = e.target.value
        setExercises([...exercise])
      }
    
      function handleRepsWeightsChange(e, index) {
        exercise[index] = e.target.value
        setExercises([...exercise])
      }
    
      function handleExerciseRemove(index){
        exercise.splice(index, 1)
        setExercises([...exercise])
      }
    
      function RepsWeightsRemove(index){
        exercise.splice(index, 1)
        setExercises([...exercise])
      }
    
      function consoleLog(){
        console.log(exercise)
      }
    

      return (
        <div>
          <h1>Record a workout</h1>
            {exercise.map((ex,index) =>(
                <>
                <div key={index}>
                  <input type="text" onChange={(e) => handleExerciseChange(e, index) } value={ex}/>
                  <button onClick={() => handleExerciseRemove(index)}>Remove</button>
                  
                    {repsWeights.map((rep, index) => (
                      <>
                      <input type="number" value="reps"/>
                      <input type="number" value="weight"/>
                      </>
                    ))}
    
                </div>
                </>
             ))}
           
          <button onClick={addExercise}>Add Exercise</button>
    
          <hr/>
          <button onClick={consoleLog}>LOG</button>
    
          <button>Submit</button>
        </div>
      );
}

export default CreateWorkout