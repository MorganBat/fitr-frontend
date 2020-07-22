import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                {/* <Route exact path="/" component={ViewBooks} />
                <Route exact path="/new" component={CreateBook} />
                <Route exact path="/books/:id" render={props => <ViewBook bookId={props.match.params.id} />} />
                <Route exact path="/books/:id/edit" render={props => <EditBook bookId={props.match.params.id} />} /> */}
                Testing
            </BrowserRouter>
        </div>
    )
}
export default App