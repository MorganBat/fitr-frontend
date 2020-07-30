import React, {useState} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import exerciseList from '../../resources/exerciseList'
import '../../assets/styles/CreateWorkout.css'

function CreateWorkout({jwt}) {

  const [exercise, setExercises] = useState([])
  const [repsWeights, setRepsWeights] = useState([])
  const [isCreated, setIsCreated] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  function addExercise() {
    setExercises([...exercise, ""])
    setRepsWeights([...repsWeights, [[0,0],[0,0],[0,0],[0,0]]])
  }

  function handleAddRep(index) {
    const newRepsWeights = [...repsWeights]
    newRepsWeights[index].push([0,0])
    setRepsWeights([...newRepsWeights])
  }

  function handleExerciseChange(e, index) {
    const newExercise = [...exercise]
    newExercise[index] = e.target.value
    setExercises([...newExercise])
  }

  function handleRepChange(e, exIndex, repIndex) {
    const newRepsWeights = [...repsWeights]
    if(e.target.value !== "") {
      newRepsWeights[exIndex][repIndex][0] = parseInt(e.target.value)
    } else {
      newRepsWeights[exIndex][repIndex][0] = 0
    }
    setRepsWeights([...newRepsWeights])
  }

  function handleWeightChange(e, exIndex, repIndex) {
    const newRepsWeights = [...repsWeights]

    if(e.target.value !== "") { 
      newRepsWeights[exIndex][repIndex][1] = parseInt(e.target.value)
    } else {
      newRepsWeights[exIndex][repIndex][1] = 0
    }

    setRepsWeights([...newRepsWeights])
  }

  function handleExerciseRemove(index){
    const newExercise = [...exercise]
    const newRepsWeights = [...repsWeights]

    newExercise.splice(index, 1)
    newRepsWeights.splice(index, 1)

    setRepsWeights([...newRepsWeights])
    setExercises([...newExercise])
  }

  function handleRepRemove(exIndex){
    const newRepsWeights = [...repsWeights]

    newRepsWeights[exIndex].splice(newRepsWeights[exIndex].length - 1, 1)

    setRepsWeights([...newRepsWeights])
  }

  function handleSubmit(){

    if(exercise.some((i) => {return i === ""})) {   

      setErrorMessage("Please choose an exercise")

    } else {

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
      .catch((e) => setErrorMessage(`An error has occurred (${e}). Please reload the page and try again.`))
    }
  }

  return (
    <div>
      {!jwt && <Redirect to="/login"/>}
      <div className="h2-container"><h2>Record a workout</h2></div>
      {errorMessage && <h3>{errorMessage}</h3>}
        {exercise.map((ex,exIndex) =>(
            <>
            <div key={exIndex}>
              <div className="dropdown-container">
                <select className="dropdown-selector" onChange={(e) => handleExerciseChange(e, exIndex) }>
                  <option></option>
                  {exerciseList.map((element) => (element.language === 2 && element.name !== "" && <option>{element.name}</option>))}
                </select>
                <button class="btn btn-light btn-sm" onClick={() => handleExerciseRemove(exIndex)}>Remove Exercise</button>
              </div>
              
              
                {repsWeights[exIndex].map((rep, repIndex) => (
                  <div className="repWeight-container">
                    <label>reps  </label>
                    <input min="0" size="3" className="repInput" type="number" onChange={(e) => handleRepChange(e, exIndex, repIndex)}/>
                    <label>  weight</label>
                    <input min="0" size="3" className="weightInput" type="number" onChange={(e) => handleWeightChange(e, exIndex, repIndex)}/>
                  </div>
                ))}
                <div className="rep-buttons-containers">
                 <div className="rep-buttons"><button class="btn btn-light btn-sm" onClick={()=> handleAddRep(exIndex)}>Add rep</button></div>
                 <div className="rep-buttons"><button class="btn btn-light btn-sm" onClick={()=> handleRepRemove(exIndex)}>Remove rep</button></div>
                </div>
            </div>
            </>
         ))}
      <div className="add-exercise-button-container">
        <button class="btn btn-light btn-sm" onClick={addExercise}>Add Exercise</button>
      </div>
      <hr/>


      <div className="submit-button-container"><button class="btn btn-light" onClick={handleSubmit}>Submit</button> <Link to="/workouts"><button class="btn btn-info">Go Back</button></Link></div>
      
      {isCreated && <Redirect to="/workouts"/>}
    </div>
  );
}

export default CreateWorkout;
