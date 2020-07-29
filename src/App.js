import React, {useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import ViewWorkouts from './components/ViewWorkouts'
import ShowWorkout from './components/ShowWorkout'
import EditWorkout from './components/EditWorkout'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    // Token is only set to make testing easier. For deployment change the default state to null.
    const [userToken, setUserToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTYwNzg3MjEsInN1YiI6NCwiZW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20ifQ.uQynHLy1Gtt099l1cclDJ56WHdni_Ekq763iN_JJ68E')
    
    return ( 
        <div>
            <BrowserRouter>
                <Route exact path="/signup" component={Signup} />
                <Route exact path='/login' render={props => <Login onLogin={jwt => setUserToken(jwt)} />} />
                <Route exact path='/workouts' render={props => <ViewWorkouts jwt={userToken} />} />
                <Route exact path='/workouts/:id' render={props => <ShowWorkout workoutId={props.match.params.id} jwt={userToken} />} />
                <Route exact path='/workouts/:id/edit' render={props => <EditWorkout workoutId = {props.match.params.id} jwt={userToken} />} />
            </BrowserRouter>
        </div>
    )
}
export default App