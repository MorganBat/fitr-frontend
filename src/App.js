import React, {useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login, {AppContext, userToken} from './Login'
import ViewWorkouts from './ViewWorkouts'

const App = () => {

const [JWT, setJWT] = useState(userToken)
    return ( 
        <div>
            <BrowserRouter>
            <Route exact path='/login' component={Login} />
            <AppContext.Provider value={{JWT}}>
            <Route exact path='/workouts' component={ViewWorkouts} />

            </AppContext.Provider>
            </BrowserRouter>
        </div>
    )
}
export default App