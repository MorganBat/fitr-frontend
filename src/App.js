import React, {useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import ViewWorkouts from './ViewWorkouts'
import ViewWorkout from './ViewWorkout'
import EditWorkout from './EditWorkout'

const App = () => {

    // Token is only set to make testing easier. For deployment change the default state to null.
const [userToken, setUserToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU4MTczMDMsInN1YiI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.jZhseYCIbHpGK6GgVAZ-4s2nQzydJuJZhTWPJhHT35A')
    return ( 
        <div>
            <BrowserRouter>
            <Route exact path='/login' render={props => <Login onLogin={jwt => setUserToken(jwt)} />} />
            <Route exact path='/workouts' render={props => <ViewWorkouts jwt={userToken} />} />
            <Route exact path='/workouts/:id' render={props => <ViewWorkout workoutId={props.match.params.id} jwt={userToken}/ >} />
            <Route exact path='/workouts/:id/edit' render={props => <EditWorkout workoutId = {props.match.params.id} jwt={userToken}/ >} />
            </BrowserRouter>
        </div>
    )
}
export default App