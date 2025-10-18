import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">Area</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Benefits</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallary">Specification</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#">How-to</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="nav-btn">Learn More</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar