import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
// import DeleteWorkout from './DeleteWorkout'
// import { AppContext } from './Login'

const ViewWorkouts = ({jwt}) => {

    const [workouts, setWorkouts] = useState([])
    const [errorMessage, setErrorMessage]= useState("")
    // const appContext = useContext(AppContext)

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU3ODYzNzksInN1YiI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.MXeqITDxtZBZPkhVF0vhvNRZuVDzZnCRNs_VO3QK4lk'

    useEffect(() => {
        axios.get(
            `https://fitr-backend.herokuapp.com/workouts`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }    
        })
        .then(res => {

            res.data.forEach(e => {
                console.log(e["date"]);
                // console.log(workouts)
                // setWorkouts(workouts.concat(e["date"]))
                setWorkouts([e["date"]]);
                console.log(workouts)
            }) 
        })
        .catch (e => 
            setErrorMessage("There was an error")
            )
    },[])


    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {/* {console.log(workouts[3])} */}

            {/* {workouts.map(
                    (w, i) => (
                    <li key={`${w}-${i}`}>{w}</li>
                    )
                )
            } */}
            this is text
        </div>
    )
}

export default ViewWorkouts