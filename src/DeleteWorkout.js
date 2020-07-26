import react from 'react'
import axios from 'axios'


const DeleteWorkout = ({workoutId}) => {

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU3ODYzNzksInN1YiI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.MXeqITDxtZBZPkhVF0vhvNRZuVDzZnCRNs_VO3QK4lk'

    function DeleteWorkout() {
        axios.delete(`https://fitr-backend.herokuapp.com/workouts/${workoutId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then()
        .catch()
    }


    return (
        <button onClick={DeleteWorkout}> Delete </button>
    )
}

export default DeleteWorkout

