import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="wrapper">
                    <div className="list">
                        <a href="#">Benefits</a>
                        <a href="#">Specifications</a>
                        <a href="#">How-to</a>
                    </div>
                    <div className="copyright-box">
                        <span>All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer