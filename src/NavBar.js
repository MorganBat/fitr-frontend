import React from 'react'

const NavBar = ({logOut}) => {

    function clickLogOut() {
        logOut(null)
    }

    return(
        <div id="navbar">
            {/* <span id = "navBarEmail"> */}
                {/* {userEmail} */}
                {/* email goes here */}
            {/* </span> */}
            <span id = "logOutButton">
                <button onClick={clickLogOut} class="btn btn-dark">Log Out</button>
            </span>
        </div>
    )
}

export default NavBar