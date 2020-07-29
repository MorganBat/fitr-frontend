import React, {useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import ViewWorkouts from './ViewWorkouts'
import ShowWorkout from './ShowWorkout'
import EditWorkout from './EditWorkout'
import Signup from './Signup'

const App = () => {

    // Token is only set to make testing easier. For deployment change the default state to null.
    const [userToken, setUserToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTYwNjcxNDIsInN1YiI6NCwiZW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20ifQ.cGOuVvMbMJ_zVRBB-Ly_VhuTz1Z5DCMPQQw6jy_rwiw')
    
    return ( 
        <div>
            <BrowserRouter>
                <Route exact path="/signup" component={Signup} />
                <Route exact path='/login' render={props => <Login onLogin={jwt => setUserToken(jwt)} />} />
                <Route exact path='/workouts' render={props => <ViewWorkouts jwt={userToken} />} />
                <Route exact path='/workouts/:id' render={props => <ShowWorkout workoutId={props.match.params.id} jwt={userToken}/ >} />
                <Route exact path='/workouts/:id/edit' render={props => <EditWorkout workoutId = {props.match.params.id} jwt={userToken}/ >} />
            </BrowserRouter>
        </div>
    )
}
export default App