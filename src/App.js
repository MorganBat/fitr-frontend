import React, {useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import ViewWorkouts from './ViewWorkouts'
import ShowWorkout from './ShowWorkout'
import EditWorkout from './EditWorkout'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/App.css'
import NavBar from './NavBar'
import CreateWorkout from './CreateWorkout'

const App = () => {

    const [userToken, setUserToken] = useState(null)

    return (
        <> 
        <NavBar logOut={res => setUserToken(res)} jwt={userToken}/>
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Signup} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path='/login' render={props => <Login onLogin={jwt => setUserToken(jwt)} />} />
                <Route exact path='/create' render={props => <CreateWorkout jwt={userToken} />} />
                <Route exact path='/workouts' render={props => <ViewWorkouts jwt={userToken} />} />
                <Route exact path='/workouts/:id' render={props => <ShowWorkout workoutId={props.match.params.id} jwt={userToken} />} />
                <Route exact path='/workouts/:id/edit' render={props => <EditWorkout workoutId = {props.match.params.id} jwt={userToken} />} />
            </BrowserRouter>
        </div>
        </>
    )
}
export default App