import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

function CreateWorkout({jwt}) {

  const [exercise, setExercises] = useState([])
  const [repsWeights, setRepsWeights] = useState([])
  const [isCreated, setIsCreated] = useState(false)

  function addExercise() {
    setExercises([...exercise, ""])
    setRepsWeights([...repsWeights, [["",""],["",""],["",""],["",""]]])
  }
  function handleAddRep(index) {
    repsWeights[index].push(["",""])
    setRepsWeights([...repsWeights])
  }

  function handleExerciseChange(e, index) {
    exercise[index] = e.target.value
    setExercises([...exercise])
  }

  function handleRepChange(e, exIndex, repIndex) {
    repsWeights[exIndex][repIndex][0] = parseInt(e.target.value)
    setRepsWeights([...repsWeights])
  }

  function handleWeightChange(e, exIndex, repIndex) {
    repsWeights[exIndex][repIndex][1] = parseInt(e.target.value)
    setRepsWeights([...repsWeights])
  }

  function handleExerciseRemove(index){
    exercise.splice(index, 1)
    repsWeights.splice(index, 1)
    setRepsWeights([...repsWeights])
    setExercises([...exercise])
  }

  function handleRepRemove(exIndex){
    repsWeights[exIndex].splice(repsWeights[exIndex].length - 1, 1)
    setRepsWeights([...repsWeights])
  }

  function handleSubmit(){
    var myDate = new Date()
    let exerciseObject = {}

    exercise.map((exe, index) => {
      exerciseObject[exe] = repsWeights[index]
    })

    let payloadObject = {
      date: `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`,
      exercises: JSON.stringify(exerciseObject)
    }

    axios.post(`https://fitr-backend.herokuapp.com/workouts`, payloadObject, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then(setIsCreated(true))
  }

  return (
    <div>
      <h1>Record a workout</h1>
        {exercise.map((ex,exIndex) =>(
            <>
            <div key={exIndex}>
              <input type="text" onChange={(e) => handleExerciseChange(e, exIndex) } value={ex}/>
              <button onClick={() => handleExerciseRemove(exIndex)}>Remove</button>
              
                {repsWeights[exIndex].map((rep, repIndex) => (
                  <>
                  <label>reps</label>
                  <input class="rep" type="number" onChange={(e) => handleRepChange(e, exIndex, repIndex)}/>
                  <label>weight</label>
                  <input class="rep" type="number" onChange={(e) => handleWeightChange(e, exIndex, repIndex)}/>
                  </>
                ))}
              <button onClick={()=> handleAddRep(exIndex)}>Add rep</button>
              <button onClick={()=> handleRepRemove(exIndex)}>Remove rep</button>
            </div>
            </>
         ))}
       
      <button onClick={addExercise}>Add Exercise</button>

      <hr/>

      <button onClick={handleSubmit}>Submit</button>
      {isCreated && <Redirect to="/"/>}
    </div>
  );
}

export default CreateWorkout;
