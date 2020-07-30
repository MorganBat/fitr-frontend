import React from 'react'
import './assets/styles/Navbar.css'

const NavBar = ({logOut}) => {

    function clickLogOut() {
        logOut(null)
    }

    return(
        <div className="navbar-container">
            <h1>Fitr</h1>
            <span id = "logOutButton">
                <button onClick={clickLogOut} class="btn btn-light btn-lg">Log Out</button>
            </span>
        </div>
    )
}

export default NavBar