import React, {useState} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import './assets/styles/Signup.css'

const Signup = () => {

const [userEmail, setEmail] = useState("")
const [userPassword, setPassword] = useState("")
const [isCreated, setIsCreated] = useState(false)
const [errorMessage, setErrorMessage] = useState("")
const [userName, setUserName] = useState("")

    function createUser() {
        if(userName && userEmail && userPassword) {
            axios.post('https://fitr-backend.herokuapp.com/users', {
                user: {
                    name: userName,
                    email: userEmail,
                    password: userPassword
                }
            })
            .then(setIsCreated(true))
        } else {
            setErrorMessage("Please fill out the entire form")
        }
    }

    return (
            <>
                <NavBar />
                    <div className="sign-up-background">
                        <div className="sign-up-flex-container">
                        {/* <div></div> */}
                        <div className="sign-up-details-container">
                            <h1 className="">SIGNUP</h1>
                            <div className="">
                                <div className="">
                                    <div>{errorMessage}</div>
                                    <div>
                                        <input
                                            className="form-control"
                                            placeholder="Name"
                                            type="text"
                                            value={userName}
                                            onChange={e => setUserName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className="form-control"
                                            placeholder="Email"
                                            type="email"
                                            value={userEmail}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className="form-control"
                                            placeholder="Password"
                                            type="password"
                                            value={userPassword}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button onClick={createUser} class="btn btn-success"> Signup </button>
                                </div>
                            </div>
                            <br />
                            <Link to="/login">Already have an account? Login</Link>
                            {isCreated && <Redirect to="/Login" />}
                        </div>
                    </div>
                </div>
        </>
    )



    // WORKING CODE BELOW BACKUP

    // return (
    //     <div className="sign-up-flex-container">
    //         <NavBar />
    //         {/* <div></div> */}
    //         <div className="sign-up-details-container">
    //             <h1 className="">SIGNUP</h1>
    //             <div className="">
    //                 <div className="">
    //                     <div>{errorMessage}</div>
    //                     <div>
    //                         <input
    //                             placeholder="Name"
    //                             type="text"
    //                             value={userName}
    //                             onChange={e => setUserName(e.target.value)}
    //                         />
    //                     </div>
    //                     <div>
    //                         <input
    //                             placeholder="Email"
    //                             type="email"
    //                             value={userEmail}
    //                             onChange={e => setEmail(e.target.value)}
    //                         />
    //                     </div>
    //                     <div>
    //                         <input
    //                             placeholder="Password"
    //                             type="password"
    //                             value={userPassword}
    //                             onChange={e => setPassword(e.target.value)}
    //                         />
    //                     </div>
    //                     <button onClick={createUser} class="btn btn-success"> Signup </button>
    //                 </div>
    //             </div>
    //             <br />
    //             <Link to="/login">Already have an account? Login</Link>
    //             {isCreated && <Redirect to="/Login" />}
    //         </div>
    //     </div>
    // )

}

export default Signup