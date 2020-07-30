import React from 'react'
import {Link} from 'react-router-dom'
import './assets/styles/Splash.css'

const Splash = () => {

    return (
        <div className="hero-screen-container">
            <div className="hero-screen-text">
              <div className="hero-screen-center">
                  <div className="h1-container">
                    <h1>Welcome to Fitr</h1>
                  </div>
                  <div className="subtitle-container">
                    <p className="subtitle"></p>
                  </div>
                  <div className="button-container">
                    <div className="single-button-container">
                      <Link to={'/Signup'}><button className="btn btn-secondary">Register</button></Link>
                    </div>
                    <div className="single-button-container">
                    <Link to={'/Login'}><button className="btn btn-secondary">Login</button></Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Splash