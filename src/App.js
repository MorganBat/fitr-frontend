import React, {useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import ViewWorkouts from './ViewWorkouts'
import ViewWorkout from './ViewWorkout'
import EditWorkout from './EditWorkout'

const App = () => {

const [userToken, setUserToken] = useState(null)
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