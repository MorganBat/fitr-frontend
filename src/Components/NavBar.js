import React from 'react'
import '../assets/styles/Navbar.css'

const NavBar = ({logOut, jwt}) => {

    const token = jwt

    function clickLogOut() {
        logOut(null)
    }

    return(
        <div className="navbar-container">
            <h1 className="title">Fitr</h1>

            {token ? 
            <span className="logOutButton">
                <button onClick={clickLogOut} class="btn btn-light btn-lg">Log Out</button>
            </span> :
            <span></span>}
        </div>
    )
}

export default NavBar